import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i3w0-bidx.css';
import '../../css/b/bjw6ntbil.css';
import '../../css/t/toz5ulbud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i3w0-bidx"/><path class="bjw6ntbil"/><path class="toz5ulbud"/></g>`,
		"fallback": "lets-icons:speed",
	});
}

export default Component;
