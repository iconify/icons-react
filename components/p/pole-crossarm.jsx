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
		"content": `<style>.ibteu3b0z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 3.5v18M3 7h18M4.5 7V3.5m15 3.5V3.5M7.5 7l4.5 4.5L16.5 7");
}
</style><path class="ibteu3b0z"/>`,
		"fallback": "uix-sharp:pole-crossarm",
	});
}

export default Component;
