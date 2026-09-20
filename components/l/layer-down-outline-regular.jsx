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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.og9kjwb4a {
  d: path("M12 15.5V20");
}

.p3ptowbul {
  d: path("M9.5 19.5 12 22l2.5 -2.5");
}

.rl2nbiksm {
  d: path("M4 11.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2");
}

.todxtrbsg {
  d: path("M4 4.5a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2 2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2");
}
</style><g class="nrj6p8qat"><path class="todxtrbsg"/><path class="rl2nbiksm"/><path class="og9kjwb4a"/><path class="p3ptowbul"/></g>`,
		"fallback": "iconmind:layer-down-outline-regular",
	});
}

export default Component;
