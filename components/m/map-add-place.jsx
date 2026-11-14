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
		"content": `<style>.ek2c0uy6k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.859 19.746L8.5 18.5l-6 2v-15l6-2l7 2l6-2v11.771M8.5 3.5v15m7-13v8.3M18 15v6m-3-3h6");
}
</style><path class="ek2c0uy6k"/>`,
		"fallback": "uix:map-add-place",
	});
}

export default Component;
