import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fmuyndumf.css';
import '../../css/a/asutu01qp.css';
import '../../css/m/m2t8ivboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fmuyndumf"/><path class="asutu01qp"/><path class="m2t8ivboj"/></g>`,
		"fallback": "hugeicons:java",
	});
}

export default Component;
