import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mie73d_2w.css';
import '../../css/w/w5tkj2b5c.css';
import '../../css/n/nfngpf0kl.css';
import '../../css/c/ck42blb_w.css';
import '../../css/c/ch1o-g7vx.css';
import '../../css/f/fbq28x_vl.css';
import '../../css/y/y7ay94b0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mie73d_2w"/><path class="w5tkj2b5c"/><path class="nfngpf0kl"/><path class="ck42blb_w"/><path class="ch1o-g7vx"/><path class="fbq28x_vl"/><path class="y7ay94b0b"/></g>`,
		"fallback": "iconaut:neural-network",
	});
}

export default Component;
