import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/i87ljq8sy.css';
import '../../css/s/srigqbf1b.css';
import '../../css/w/w0rbxob2c.css';
import '../../css/q/qpd30mb9y.css';
import '../../css/p/pja5r2bbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="i87ljq8sy"/><path class="srigqbf1b wm-k"/><path class="w0rbxob2c wm-k"/><path class="qpd30mb9y wm-s"/><path class="pja5r2bbc wm-s"/></g>`,
		"fallback": "withicons:user-plus-sketch",
	});
}

export default Component;
