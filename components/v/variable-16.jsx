import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hirnc1viw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hirnc1viw"/>`,
		"fallback": "nonicons:variable-16",
	});
}

export default Component;
