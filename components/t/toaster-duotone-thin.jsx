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
		"content": `<style>.cnveleblr {
  d: path("M2 11v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hx0a2p59k {
  d: path("M8 11h4");
}

.krlm5__2s {
  d: path("M14 11h4");
}

.stzpsrbzr {
  d: path("M5 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.x7f8f6eaf {
  fill: currentColor;
  d: path("M5 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="x7f8f6eaf"/><path class="stzpsrbzr"/><path class="hx0a2p59k"/><path class="krlm5__2s"/><path class="cnveleblr"/></g>`,
		"fallback": "iconmind:toaster-duotone-thin",
	});
}

export default Component;
