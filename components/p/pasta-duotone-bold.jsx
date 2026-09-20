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
		"content": `<style>.hue5ncbwv {
  d: path("M7 12a5 5 0 0 1 10 0");
}

.kefai_j-g {
  fill: currentColor;
  d: path("M3 12h18c0 4 -4 7 -9 7s-9 -3 -9 -7");
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

.tn8-gc8mv {
  d: path("M10 12a2 2 0 0 1 4 0");
}

.z5t072bpe {
  d: path("M3 12h18c0 4 -4 7 -9 7s-9 -3 -9 -7");
}
</style><g class="s0phu2bbs"><path class="kefai_j-g"/><path class="z5t072bpe"/><path class="hue5ncbwv"/><path class="tn8-gc8mv"/></g>`,
		"fallback": "iconmind:pasta-duotone-bold",
	});
}

export default Component;
