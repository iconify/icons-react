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
		"content": `<style>.bbe6zmo1f {
  d: path("M3.25 19.5V7A3.25 3.25 0 0 1 6.5 3.75h11A3.25 3.25 0 0 1 20.75 7v12.25a1.5 1.5 0 0 1-3 0V7.75a1 1 0 0 0-1-1h-9.5a1 1 0 0 0-1 1V19.5a1.5 1.5 0 0 1-3 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0ob5ukgq {
  d: path("M10 9.25h4a1.25 1.25 0 0 1 0 2.5h-4a1.25 1.25 0 0 0 0 2.5h4a1.25 1.25 0 0 1 0 2.5h-4a1.25 1.25 0 0 0 0 2.5h2");
}
</style><g class="hntgybcog"><path class="bbe6zmo1f"/><path class="m0ob5ukgq"/></g>`,
		"fallback": "iconoven:intestines",
	});
}

export default Component;
