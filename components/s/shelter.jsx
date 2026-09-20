import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c176k3bcl.css';
import '../../css/s/s86d2mbpv.css';
import '../../css/x/x4u8pbwjc.css';
import '../../css/z/z88aujbir.css';
import '../../css/h/h7rn1xbcl.css';
import '../../css/m/mo2x9ubmn.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/z/z_0fwibga.css';
import '../../css/h/h7rnd4bsu.css';
import '../../css/u/u3qreccib.css';
import '../../css/y/yc2-m7bub.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c176k3bcl"/><path class="s86d2mbpv"/><g class="x4u8pbwjc"><path class="z88aujbir"/><circle class="h7rn1xbcl"/><circle class="mo2x9ubmn"/></g><g class="jn8qy4bru"><path class="z_0fwibga"/><path class="h7rnd4bsu"/><path class="u3qreccib"/><path class="yc2-m7bub"/><circle class="h7rn1xbcl"/><circle class="mo2x9ubmn"/></g>`,
		"fallback": "openmoji:shelter",
	});
}

export default Component;
