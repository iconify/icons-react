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
		"content": `<style>.bhl_zu55p {
  d: path("M9.5 10.5 12 8l2.5 2.5");
}

.f4yp5uw0u {
  d: path("M14 18.5a2 2 0 0 1 -4 0");
}

.k70w93buq {
  d: path("M6 15v-5a6 6 0 0 1 12 0v5l2.5 2.5h-17z");
}

.owfn5sxxm {
  d: path("M12 8v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="k70w93buq"/><path class="f4yp5uw0u"/><path class="owfn5sxxm"/><path class="bhl_zu55p"/></g>`,
		"fallback": "iconmind:page-escalate-outline-bold",
	});
}

export default Component;
