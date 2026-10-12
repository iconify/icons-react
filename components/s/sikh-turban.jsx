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

.ilrsirbgq {
  d: path("M3.25 18.25C2.75 10 6.75 4.75 12 4.75s9.25 5.25 8.75 13.5l-8.75-4Z");
}

.y5tn3hb2a {
  d: path("M4.5 13.25L12 10.5l7.5 2.75M6.5 9.5L12 7.75l5.5 1.75");
}
</style><g class="hntgybcog"><path class="ilrsirbgq"/><path class="y5tn3hb2a"/></g>`,
		"fallback": "iconoven:sikh-turban",
	});
}

export default Component;
