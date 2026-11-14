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
		"content": `<style>.bhahe4bgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5L12 12m3.384-6.566l3.182 3.182l-4.95 4.95l-3.182-3.182ZM17 7c1.5-1.5 1.5-4 4-4.5");
}
</style><path class="bhahe4bgz"/>`,
		"fallback": "uix-sharp:temperature-sensor",
	});
}

export default Component;
