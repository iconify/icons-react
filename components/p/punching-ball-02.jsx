import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/n-nt2-bny.css';
import '../../css/n/nuvpd_bka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="n-nt2-bny"/><path class="nuvpd_bka"/></g>`,
		"fallback": "hugeicons:punching-ball-02",
	});
}

export default Component;
