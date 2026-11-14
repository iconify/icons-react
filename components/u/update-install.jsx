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
		"content": `<style>.aihfrab2h {
  d: path("M17.785 5.106a9 9 0 1 1-8.863-1.563");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t-3s10z7o {
  d: path("M5.75 3.5h3v3m3.25 1V16m-3.25-3.25L12 16l3.25-3.25");
}
</style><g class="hntgybcog"><path class="aihfrab2h"/><path class="t-3s10z7o"/></g>`,
		"fallback": "uix:update-install",
	});
}

export default Component;
