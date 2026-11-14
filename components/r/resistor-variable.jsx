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
		"content": `<style>.kusr7fjrb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14h3m0 0L7 11l2.5 6l2.5-6l2.5 6l2.5-6l1.5 3m0 0h3M12 3.5v5m-2-2l2 2l2-2");
}
</style><path class="kusr7fjrb"/>`,
		"fallback": "uix-sharp:resistor-variable",
	});
}

export default Component;
