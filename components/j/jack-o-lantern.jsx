import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8ugaacsr.css';
import '../../css/p/p6_ecnb7x.css';
import '../../css/c/cwaz3vbhm.css';
import '../../css/g/gtinj42mi.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/g/gvov070xt.css';
import '../../css/g/gq51libtm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8ugaacsr"/><path class="p6_ecnb7x"/><path class="cwaz3vbhm"/><path class="gtinj42mi"/><g class="ij2x_72vy"><path class="gvov070xt"/><path class="gq51libtm"/></g>`,
		"fallback": "openmoji:jack-o-lantern",
	});
}

export default Component;
