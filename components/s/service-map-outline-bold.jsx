import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.epoh96bbt {
  d: path("M16 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.i6r2d3rzf {
  d: path("m16.5 7.5 -9 9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.t1sjjacis {
  d: path("M4 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.u_41jqbcx {
  d: path("M4 18a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.veni6hbgn {
  d: path("M16 6a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.zr69sp0ly {
  d: path("m7.5 7.5 9 9");
}
</style><g class="s0phu2bbs"><path class="t1sjjacis"/><path class="veni6hbgn"/><path class="u_41jqbcx"/><path class="epoh96bbt"/><path class="zr69sp0ly"/><path class="i6r2d3rzf"/></g>`,
		"fallback": "iconmind:service-map-outline-bold",
	});
}

export default Component;
