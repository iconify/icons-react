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
		"content": `<style>.hautm_0uk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 16a5 5 0 0 1 10 0M2.5 16h19M12 4.5V8m-5.5 2.5L5 9m12.5 1.5L19 9M7 19.5h10");
}
</style><path class="hautm_0uk"/>`,
		"fallback": "uix-sharp:sun-horizon",
	});
}

export default Component;
