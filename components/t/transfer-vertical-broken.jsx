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
		"content": `<style>.dj9zaictl {
  d: path("M4 14.5L10 20V10M10 4L10 6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rwp5pobhv {
  d: path("M20 9.5L14 4V14M14 20L14 17.5");
}
</style><g class="hntgybcog"><path class="rwp5pobhv"/><path class="dj9zaictl"/></g>`,
		"fallback": "solar:transfer-vertical-broken",
	});
}

export default Component;
