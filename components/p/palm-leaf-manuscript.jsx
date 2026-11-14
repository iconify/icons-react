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
		"content": `<style>.gbjejjbpp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4.5h14A1.5 1.5 0 0 1 20.5 6A1.5 1.5 0 0 1 19 7.5H5A1.5 1.5 0 0 1 3.5 6A1.5 1.5 0 0 1 5 4.5m0 6h14a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 12A1.5 1.5 0 0 1 5 10.5m0 6h14a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 18A1.5 1.5 0 0 1 5 16.5m7-14v19");
}
</style><path class="gbjejjbpp"/>`,
		"fallback": "uix:palm-leaf-manuscript",
	});
}

export default Component;
