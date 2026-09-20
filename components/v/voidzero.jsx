import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t9ru37blf.css';
import '../../css/v/v0v7gbcfe.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="t9ru37blf"/><path class="v0v7gbcfe"/></g>`,
		"fallback": "thesvg-color:voidzero",
	});
}

export default Component;
