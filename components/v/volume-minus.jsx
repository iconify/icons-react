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
		"content": `<style>.k7q2z7hkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 9.5A1.5 1.5 0 0 1 5.25 8h2.2l4.4-3.7a.9.9 0 0 1 1.5.7v14a.9.9 0 0 1-1.5.7L7.45 16h-2.2a1.5 1.5 0 0 1-1.5-1.5Zm12.5-.5a4.25 4.25 0 0 1 0 6");
}
</style><path class="k7q2z7hkg"/>`,
		"fallback": "iconoven:volume-minus",
	});
}

export default Component;
