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
		"content": `<style>.ha05_q27d {
  d: path("M5 4v6h11v3");
}

.n3wtsvdya {
  fill: currentColor;
  d: path("m16 15 2.5 2.5a3 3 0 1 1 -5 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w2b54lbpr {
  d: path("M3 4h5");
}

.xb-kv0a1i {
  d: path("m16 15 2.5 2.5a3 3 0 1 1 -5 0Z");
}
</style><g class="s0phu2bbs"><path class="n3wtsvdya"/><path class="ha05_q27d"/><path class="w2b54lbpr"/><path class="xb-kv0a1i"/></g>`,
		"fallback": "iconmind:tap-duotone-bold",
	});
}

export default Component;
