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
		"content": `<style>.sg5nce76k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.75 19.25l5-14.5l5 14.5m-8.25-5H11m3 5l3.5-9l3.5 9m-5.9-2.75h4.8");
}
</style><path class="sg5nce76k"/>`,
		"fallback": "iconoven:small-caps",
	});
}

export default Component;
