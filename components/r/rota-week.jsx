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
		"content": `<style>.zuew2nugm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h11A3.5 3.5 0 0 1 21 8v10a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 18V8a3.5 3.5 0 0 1 3.5-3.5m1.5-2v4m8-4v4m-13 3h18M6.5 12.75H11m-1.5 3h5m-1.5 3h4.5");
}
</style><path class="zuew2nugm"/>`,
		"fallback": "uix:rota-week",
	});
}

export default Component;
