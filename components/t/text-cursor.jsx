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
		"content": `<style>.tzw29uq6t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 3.5q2.25 0 3 1.5q.75-1.5 3-1.5m-6 17q2.25 0 3-1.5q.75 1.5 3 1.5M12 5v14m-2-7h4");
}
</style><path class="tzw29uq6t"/>`,
		"fallback": "uix:text-cursor",
	});
}

export default Component;
