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

.iubm82baj {
  d: path("M12 7.5c0-2 .75-3.5 2.5-4.5");
}

.xq97uua6d {
  d: path("M12 7.5c-1.5-1-3.25-1.25-4.75-.75C4.5 7.75 3.75 11 4.5 14c.75 3.5 3.25 6.5 5.5 6.5c.75 0 1.25-.5 2-.5s1.25.5 2 .5c2.25 0 4.75-3 5.5-6.5c.75-3 0-6.25-2.75-7.25c-1.5-.5-3.25-.25-4.75.75");
}
</style><g class="hntgybcog"><path class="xq97uua6d"/><path class="iubm82baj"/></g>`,
		"fallback": "uix:pin-fruit",
	});
}

export default Component;
