import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xvjk-cbox.css';
import '../../css/c/c4v1z3pvf.css';
import '../../css/d/dfvtxfbxr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="xvjk-cbox"/><path class="c4v1z3pvf"/><path class="dfvtxfbxr"/></g>`,
		"fallback": "solar:move-square-linear",
	});
}

export default Component;
