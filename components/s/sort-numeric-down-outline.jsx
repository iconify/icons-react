import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bozltt-kp.css';
import '../../css/k/khq2vx_5t.css';
import '../../css/i/iv22zzbdv.css';
import '../../css/k/kpxtl1bmv.css';
import '../../css/b/bpq47ib3p.css';
import '../../css/z/zgx2cjn4j.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bozltt-kp"/><path class="khq2vx_5t"/><path clip-rule="evenodd" class="iv22zzbdv"/><path clip-rule="evenodd" class="kpxtl1bmv"/><path class="bpq47ib3p"/><path clip-rule="evenodd" class="zgx2cjn4j"/></g>`,
		"fallback": "glyphs:sort-numeric-down-outline",
	});
}

export default Component;
