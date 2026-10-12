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
		"content": `<style>.a_0g7mbyb {
  d: path("M2.75 10c0 2.35 4.14 4.25 9.25 4.25s9.25-1.9 9.25-4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u6ik4k8wl {
  d: path("M2.75 10c0-2.35 4.14-4.25 9.25-4.25s9.25 1.9 9.25 4.25v4c0 2.35-4.14 4.25-9.25 4.25S2.75 16.35 2.75 14Z");
}
</style><g class="hntgybcog"><path class="u6ik4k8wl"/><path class="a_0g7mbyb"/></g>`,
		"fallback": "iconoven:puck",
	});
}

export default Component;
