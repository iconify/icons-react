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
		"content": `<style>.f23oww7ng {
  fill: currentColor;
  d: path("M5 14h10l3.5 3.5L15 21H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ljz_vjbfq {
  d: path("M7 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ob3bf9b2i {
  d: path("M5 3h10l3.5 3.5L15 10H5Z");
}

.phj3jm8ef {
  d: path("M7 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.r4bxr4bnm {
  d: path("M5 14h10l3.5 3.5L15 21H5Z");
}

.y3q_wpbez {
  fill: currentColor;
  d: path("M5 3h10l3.5 3.5L15 10H5Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y8cxqebzo {
  fill: currentColor;
  d: path("M7 17.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.yz8w-bcjg {
  fill: currentColor;
  d: path("M7 6.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y3q_wpbez"/><path class="f23oww7ng"/><path class="yz8w-bcjg"/><path class="y8cxqebzo"/><path class="ob3bf9b2i"/><path class="r4bxr4bnm"/><path class="ljz_vjbfq"/><path class="phj3jm8ef"/></g>`,
		"fallback": "iconmind:label-queue-duotone-regular",
	});
}

export default Component;
