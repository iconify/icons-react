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
		"content": `<style>.b59fimbjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 4v17.5M20.5 4v17.5M3.5 8h17m-17 9h17M8 8v9m4-9v9m4-9v9");
}
</style><path class="b59fimbjo"/>`,
		"fallback": "uix:nursery",
	});
}

export default Component;
