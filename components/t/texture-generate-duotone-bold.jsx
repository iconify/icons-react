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
		"content": `<style>.aig5gcc6s {
  d: path("m12 17 5 -5");
}

.miofc3chu {
  d: path("m9 15 6 -6");
}

.n2j__bcmh {
  d: path("m7 12 4 -4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sf7s7wb6x {
  d: path("m12 2 6 6v8l-6 6 -6 -6V8Z");
}

.zp7m0nbel {
  fill: currentColor;
  d: path("m12 2 6 6v8l-6 6 -6 -6V8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="s0phu2bbs"><path class="zp7m0nbel"/><path class="sf7s7wb6x"/><path class="n2j__bcmh"/><path class="miofc3chu"/><path class="aig5gcc6s"/></g>`,
		"fallback": "iconmind:texture-generate-duotone-bold",
	});
}

export default Component;
