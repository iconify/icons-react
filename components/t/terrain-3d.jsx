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
		"content": `<style>.duma6gb_s {
  d: path("M3 14c1-4.5 3.5-6.5 5.75-3.75C10.5 4.5 15 2.5 17.25 9.5C19 9 20.5 11 21 14v3.5l-9 4l-9-4Z");
}

.groz8qehx {
  d: path("m3 14l9 4l9-4m-9 4v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="duma6gb_s"/><path class="groz8qehx"/></g>`,
		"fallback": "uix:terrain-3d",
	});
}

export default Component;
