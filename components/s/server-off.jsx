import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/yvsdj-byp.css';
import '../../css/b/bybz0tjxq.css';
import '../../css/n/nj1ev_b1z.css';
import '../../css/f/fvpfrkbjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="yvsdj-byp"/><path class="bybz0tjxq"/><path class="nj1ev_b1z"/><path class="fvpfrkbjr"/></g>`,
		"fallback": "hugeicons:server-off",
	});
}

export default Component;
