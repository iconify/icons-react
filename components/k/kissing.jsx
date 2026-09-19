import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaq7u5mit.css';
import '../../css/t/tizfb7rbq.css';
import '../../css/m/mvy7u1bni.css';
import '../../css/o/o-byh8b-x.css';
import '../../css/t/t9akj6bto.css';
import '../../css/b/br05enbrk.css';
import '../../css/j/jt2mnzbgn.css';
import '../../css/n/n0whlvchv.css';
import '../../css/f/flfl6700i.css';
import '../../css/s/su88bpbsr.css';
import '../../css/m/mfizxex4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaq7u5mit"/><path class="tizfb7rbq"/><path class="mvy7u1bni"/><path class="o-byh8b-x"/><path class="t9akj6bto"/><path class="br05enbrk"/><path class="jt2mnzbgn"/><path class="n0whlvchv"/><path class="flfl6700i"/><path class="su88bpbsr"/><path class="mfizxex4p"/>`,
		"fallback": "fxemoji:kissing",
	});
}

export default Component;
