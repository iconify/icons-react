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
		"content": `<radialGradient id="SVGvmd00dWN" cx="-475.807" cy="-11.043" r=".558" gradientTransform="matrix(1874.62 0 0 1592.06006 892449.81 17276.5)" gradientUnits="userSpaceOnUse"><stop offset=".556" class="ps5rjqboi"/><stop offset=".994" class="j_tae3bog"/></radialGradient><path fill="url(#SVGvmd00dWN)" class="kv29pvz9f"/><path class="rcjsf9m8u"/><path class="xz3yv8bsm"/><linearGradient id="SVGYGsZdbkt" x1="428.2" x2="111.5" y1="334.6" y2="-105.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="s3hif9bfr"/><stop offset=".307" class="rsqrgwb7b"/><stop offset="1" class="out38achs"/></linearGradient><path fill="url(#SVGYGsZdbkt)" class="s-hxl--kj"/>`,
		"fallback": "selfhst:proton-calendar",
	});
}

export default Component;
