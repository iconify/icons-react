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
		"content": `<style>.l_o_r5lih {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5L8 3.5m12.5 17L16 3.5M12 20V8m-2.5 2.5L12 8l2.5 2.5");
}
</style><path class="l_o_r5lih"/>`,
		"fallback": "uix:lane-centering",
	});
}

export default Component;
