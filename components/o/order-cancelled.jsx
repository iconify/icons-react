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
		"content": `<style>.em4p9fjtz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.047 20.975L12 21l-8.5-4.5v-9L12 3l8.5 4.5v4.065M3.5 7.5l5.745 3.041m5.567-.03L20.5 7.5M12 12v2m3.5 1.5l5 5m0-5l-5 5");
}
</style><path class="em4p9fjtz"/>`,
		"fallback": "uix-sharp:order-cancelled",
	});
}

export default Component;
