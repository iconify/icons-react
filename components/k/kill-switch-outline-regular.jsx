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
		"content": `<style>.b3h_rz89d {
  d: path("m6 11 2 2");
}

.hqwsf4bjq {
  d: path("m8 11 -2 2");
}

.ik93a37tn {
  d: path("M4 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.unjh48car {
  d: path("M2 12a5 5 0 0 1 5 -5h10a5 5 0 0 1 5 5 5 5 0 0 1 -5 5H7a5 5 0 0 1 -5 -5");
}
</style><g class="nrj6p8qat"><path class="unjh48car"/><path class="ik93a37tn"/><path class="b3h_rz89d"/><path class="hqwsf4bjq"/></g>`,
		"fallback": "iconmind:kill-switch-outline-regular",
	});
}

export default Component;
