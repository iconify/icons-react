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
		"content": `<style>.d8z1r1beo {
  d: path("M15 5h3a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V8a3 3 0 0 1 3 -3h3");
}

.f-6kshnwt {
  d: path("M11 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sobs47b0t {
  d: path("M12 2 9 5l3 3");
}
</style><g class="hntgybcog"><path class="d8z1r1beo"/><path class="sobs47b0t"/><path class="f-6kshnwt"/></g>`,
		"fallback": "iconmind:rotate-ccw-outline-thin",
	});
}

export default Component;
