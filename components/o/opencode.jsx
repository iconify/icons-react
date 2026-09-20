import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0klx1dfy.css';
import '../../css/n/nr9_5n4qz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="matrix(1.5 0 0 1.5 -23.858 -7.25)"><path class="x0klx1dfy"/><rect class="nr9_5n4qz"/></g>`,
		"fallback": "material-icon-theme:opencode",
	});
}

export default Component;
