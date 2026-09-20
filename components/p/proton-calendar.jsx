import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ps5rjqboi.css';
import '../../css/j/j_tae3bog.css';
import '../../css/k/kv29pvz9f.css';
import '../../css/r/rcjsf9m8u.css';
import '../../css/x/xz3yv8bsm.css';
import '../../css/s/s3hif9bfr.css';
import '../../css/r/rsqrgwb7b.css';
import '../../css/o/out38achs.css';
import '../../css/s/s-hxl--kj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<radialGradient id="SVGyW305cXN" cx="-475.807" cy="-11.043" r=".558" gradientTransform="matrix(1874.62 0 0 1592.0601 892449.813 17276.502)" gradientUnits="userSpaceOnUse"><stop offset=".556" class="ps5rjqboi"/><stop offset=".994" class="j_tae3bog"/></radialGradient><path fill="url(#SVGyW305cXN)" class="kv29pvz9f"/><path class="rcjsf9m8u"/><path class="xz3yv8bsm"/><linearGradient id="SVGf4abgcpn" x1="428.154" x2="111.508" y1="590.551" y2="150.211" gradientTransform="translate(0 -256)" gradientUnits="userSpaceOnUse"><stop offset="0" class="s3hif9bfr"/><stop offset=".307" class="rsqrgwb7b"/><stop offset="1" class="out38achs"/></linearGradient><path fill="url(#SVGf4abgcpn)" class="s-hxl--kj"/>`,
		"fallback": "selfhst:proton-calendar",
	});
}

export default Component;
