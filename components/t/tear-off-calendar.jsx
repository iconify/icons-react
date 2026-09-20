import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j_04idcau.css';
import '../../css/r/r92qjrbee.css';
import '../../css/c/c2dn6-bls.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/w/wgxp6ybdl.css';
import '../../css/i/iaenl7p1m.css';
import '../../css/u/u7olocczg.css';
import '../../css/r/rp169lb8c.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j_04idcau"/><path class="r92qjrbee"/><path class="c2dn6-bls"/><g class="jn8qy4bru"><path class="wgxp6ybdl"/><path class="iaenl7p1m"/><path class="u7olocczg"/><path class="rp169lb8c"/></g>`,
		"fallback": "openmoji:tear-off-calendar",
	});
}

export default Component;
