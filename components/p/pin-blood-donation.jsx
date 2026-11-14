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
		"content": `<style>.b3anb2b2e {
  d: path("m9.5 19.5l-5-7a6.25 6.25 0 1 1 10 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ru2ogm2vd {
  d: path("M7.25 8.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m11 5.75s3 3 3 4a3 3 0 0 1-6 0c0-1 3-4 3-4");
}
</style><g class="hntgybcog"><path class="b3anb2b2e"/><path class="ru2ogm2vd"/></g>`,
		"fallback": "uix:pin-blood-donation",
	});
}

export default Component;
