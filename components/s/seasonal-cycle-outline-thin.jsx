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
		"content": `<style>.h06k0cc0f {
  d: path("M3 12a4 4 0 0 1 8 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oh3qc3kah {
  d: path("M19 12a4 4 0 0 1 -8 0");
}
</style><g class="hntgybcog"><path class="h06k0cc0f"/><path class="oh3qc3kah"/></g>`,
		"fallback": "iconmind:seasonal-cycle-outline-thin",
	});
}

export default Component;
