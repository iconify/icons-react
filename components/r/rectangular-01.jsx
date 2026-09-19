import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ykjzqvbnx.css';
import '../../css/f/fwq1imo5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ykjzqvbnx"/><path class="fwq1imo5x"/></g>`,
		"fallback": "hugeicons:rectangular-01",
	});
}

export default Component;
