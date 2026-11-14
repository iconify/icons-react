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
		"content": `<style>.x7ioo573g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20.5V13a2.5 2.5 0 0 1 5 0v7.5m2 0V8a2.5 2.5 0 0 1 5 0v12.5m2 0V11a2.5 2.5 0 0 1 5 0v9.5M2 20.5h20M7.5 16h2m5 0h2");
}
</style><path class="x7ioo573g"/>`,
		"fallback": "uix:oil-depot",
	});
}

export default Component;
