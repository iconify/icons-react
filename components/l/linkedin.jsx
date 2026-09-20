import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aa0l2acmx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aa0l2acmx"/>`,
		"fallback": "pajamas:linkedin",
	});
}

export default Component;
