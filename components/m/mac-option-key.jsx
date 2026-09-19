import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cx17xhu1q.css';
import '../../css/d/d34tibb-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cx17xhu1q"/><path class="d34tibb-f"/></g>`,
		"fallback": "iconoir:mac-option-key",
	});
}

export default Component;
