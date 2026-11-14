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
		"content": `<style>.r25n_jokt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 15.5C8 13 5.5 11 5.5 8.5c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6c0 2.5-2.5 4.5-6.5 7ZM9.5 18h5v3.5h-5Zm2.5-2.5V18");
}
</style><path class="r25n_jokt"/>`,
		"fallback": "uix-sharp:weather-balloon",
	});
}

export default Component;
