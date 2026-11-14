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
		"content": `<style>.qj5qmkwvc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19m-19 11h19M2.5 12l4-5.5l6.5 11l6.5-11l2 3");
}
</style><path class="qj5qmkwvc"/>`,
		"fallback": "uix-sharp:total-internal-reflection",
	});
}

export default Component;
