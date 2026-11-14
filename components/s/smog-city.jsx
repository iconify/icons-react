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
		"content": `<style>.vh7ifobwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21h19m-18 0v-7h5V9.75h6v2.75h6V21M4 3.5q2-1.25 4 0t4 0t4 0t4 0M4 6.25q2-1.25 4 0t4 0t4 0t4 0");
}
</style><path class="vh7ifobwm"/>`,
		"fallback": "uix-sharp:smog-city",
	});
}

export default Component;
