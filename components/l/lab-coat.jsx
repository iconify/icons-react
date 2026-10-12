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
		"content": `<style>.cjlf3actq {
  d: path("M8.25 3.25L12 8l3.75-4.75L19.4 4.9a1.5 1.5 0 0 1 .85 1.35v13.5a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V6.25A1.5 1.5 0 0 1 4.6 4.9Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ysz2qqeub {
  d: path("M8.25 3.25L12 8l-2.25 3.25L7 6.5Zm7.5 0L12 8l2.25 3.25L17 6.5ZM12 12.5v6.75m3-4h2.25");
}
</style><g class="hntgybcog"><path class="cjlf3actq"/><path class="ysz2qqeub"/></g>`,
		"fallback": "iconoven:lab-coat",
	});
}

export default Component;
