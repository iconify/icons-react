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

.hx0a2p59k {
  d: path("M8 11h4");
}

.krlm5__2s {
  d: path("M14 11h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.stzpsrbzr {
  d: path("M5 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}
</style><g class="s0phu2bbs"><path class="stzpsrbzr"/><path class="hx0a2p59k"/><path class="krlm5__2s"/><path class="cnveleblr"/></g>`,
		"fallback": "iconmind:toaster-outline-bold",
	});
}

export default Component;
