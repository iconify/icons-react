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
		"content": `<style>.pqlix3vty {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6Q9 3.75 3 4.5v14q6-.75 9 1.5q3-2.25 9-1.5v-14q-6-.75-9 1.5m0 0v14M5.75 9.5h3.5m5.5 0h3.5m-3.5 3.5h3.5");
}
</style><path class="pqlix3vty"/>`,
		"fallback": "uix:repo-wiki",
	});
}

export default Component;
