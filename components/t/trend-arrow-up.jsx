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

.km4oxrb9q {
  d: path("M3 19c7 0 12-8 17-13");
}

.mlz9rob2a {
  d: path("M15 6h5v5");
}
</style><g class="hntgybcog"><path class="km4oxrb9q"/><path class="mlz9rob2a"/></g>`,
		"fallback": "uix:trend-arrow-up",
	});
}

export default Component;
