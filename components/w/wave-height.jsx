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
		"content": `<style>.x7txwxc4y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 20c3.5 0 4-12 9-12c3 0 4 3 2.5 4.5M19.5 3v18m-2-18h4m-4 18h4m-4-13h4");
}
</style><path class="x7txwxc4y"/>`,
		"fallback": "uix:wave-height",
	});
}

export default Component;
