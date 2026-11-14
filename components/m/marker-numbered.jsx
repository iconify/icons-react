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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.np9-chnov {
  d: path("M12 21.5C10.5 20 4.5 14.75 4.5 9.75a7.5 7.5 0 0 1 15 0c0 5-6 10.25-7.5 11.75");
}

.sref4lrmd {
  d: path("m10.25 8.25l2.25-1.5v6");
}
</style><g class="hntgybcog"><path class="np9-chnov"/><path class="sref4lrmd"/></g>`,
		"fallback": "uix:marker-numbered",
	});
}

export default Component;
