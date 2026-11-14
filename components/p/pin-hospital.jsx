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
		"content": `<style>.f8jd3cbhf {
  d: path("M10 20.5v-3h4v3");
}

.har9ybcaq {
  d: path("M4 20.5V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 6v14.5m-17.5 0h19M12 8v6m-3-3h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="har9ybcaq"/><path class="f8jd3cbhf"/></g>`,
		"fallback": "uix:pin-hospital",
	});
}

export default Component;
