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
		"content": `<style>.fxkurobsu {
  d: path("M17.5 10.5v3");
}

.oh4p-ccfe {
  d: path("M2 10a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.qaaxrs2gg {
  d: path("M5 12h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wrfjs43gu {
  d: path("M16 12h3");
}
</style><g class="s0phu2bbs"><path class="oh4p-ccfe"/><path class="qaaxrs2gg"/><path class="wrfjs43gu"/><path class="fxkurobsu"/></g>`,
		"fallback": "iconmind:stepper-input-outline-bold",
	});
}

export default Component;
