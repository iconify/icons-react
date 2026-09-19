import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fld3w9-hc.css';
import '../../css/h/hb5jx69vg.css';
import '../../css/x/x3jgekbzb.css';
import '../../css/s/sc3qm9b1q.css';
import '../../css/p/ptavbiy3n.css';
import '../../css/r/rrot5yb8u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fld3w9-hc"/><path class="hb5jx69vg"/><path class="x3jgekbzb"/><path class="sc3qm9b1q"/><path class="ptavbiy3n"/><path class="rrot5yb8u"/></g>`,
		"fallback": "glyphs:volleyball",
	});
}

export default Component;
