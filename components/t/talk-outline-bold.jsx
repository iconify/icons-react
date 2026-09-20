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
		"content": `<style>.d-7e28zns {
  d: path("M18 8a4 4 0 0 1 0 8");
}

.i7o5y9-lr {
  d: path("M18 10a2 2 0 0 1 0 4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uzrj-lb1g {
  d: path("M5 21v-3c-1.5 -1.5 -2 -4 -2 -6.5a6 6 0 0 1 12 -1c0 1.5 1.5 2 1.5 3s-1 1 -1.5 1V17a1.5 1.5 0 0 1 -1.5 1.5H11V21");
}
</style><g class="s0phu2bbs"><path class="uzrj-lb1g"/><path class="i7o5y9-lr"/><path class="d-7e28zns"/></g>`,
		"fallback": "iconmind:talk-outline-bold",
	});
}

export default Component;
