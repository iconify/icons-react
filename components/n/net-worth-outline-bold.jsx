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
		"content": `<style>.jwnes9bsk {
  d: path("M8 19h8");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.x4q3oe16k {
  d: path("M3 7h18M3 7a3 3 0 0 0 6 0m6 0a3 3 0 0 0 6 0");
}

.x5li7lwaz {
  d: path("M12 7v12");
}

.ymw3aibdo {
  d: path("M10 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}
</style><g class="s0phu2bbs"><path class="x4q3oe16k"/><path class="x5li7lwaz"/><path class="jwnes9bsk"/><path class="ymw3aibdo"/></g>`,
		"fallback": "iconmind:net-worth-outline-bold",
	});
}

export default Component;
