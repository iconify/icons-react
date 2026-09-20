import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jb7dbebbz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jb7dbebbz"/>`,
		"fallback": "pajamas:license",
	});
}

export default Component;
