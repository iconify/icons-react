import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/i48j-4b_r.css';
import '../../css/y/ys4z1_tir.css';
import '../../css/n/n958a9tgh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="i48j-4b_r"/><path class="ys4z1_tir"/><path class="n958a9tgh"/></g>`,
		"fallback": "keyline-icons:piggy-bank-sharp-two-tone",
	});
}

export default Component;
