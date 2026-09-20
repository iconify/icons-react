import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/d71s9bpxk.css';
import '../../css/i/i55b91czr.css';
import '../../css/o/oh-a85bpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="d71s9bpxk"/><path class="i55b91czr"/><path class="oh-a85bpt"/></g>`,
		"fallback": "solar:record-minimalistic-linear",
	});
}

export default Component;
