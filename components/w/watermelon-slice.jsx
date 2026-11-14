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
		"content": `<style>.n34mimqne {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a9 9 0 0 0 18 0Zm-.5 0h19m-13 3.5h.01m3.49 2h.01m3.49-2h.01");
}
</style><path class="n34mimqne"/>`,
		"fallback": "uix:watermelon-slice",
	});
}

export default Component;
