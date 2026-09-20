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
		"content": `<style>.ifnz35boy {
  d: path("M5 12v8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.wp14ejvwu {
  d: path("M19 12v8");
}

.yhxg0gb1u {
  d: path("M3 11c4 3 14 3 18 0");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="yhxg0gb1u"/><path class="ifnz35boy"/><path class="wp14ejvwu"/><path class="ymw3aibdo"/></g>`,
		"fallback": "iconmind:trampoline-outline-bold",
	});
}

export default Component;
