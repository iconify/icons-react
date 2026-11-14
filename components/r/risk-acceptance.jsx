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
		"content": `<style>.kih7t5ife {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.323 18.5H2.5l9-15.5l6.729 11.588M14.75 18l2 2L21 15.75");
}
</style><path class="kih7t5ife"/>`,
		"fallback": "uix-sharp:risk-acceptance",
	});
}

export default Component;
