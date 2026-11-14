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
		"content": `<style>.i-ilxl36t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19m18-19v19M6 8.5h12V13H6Zm5 4.5l2-4.5M8 13v5m8-5v5");
}
</style><path class="i-ilxl36t"/>`,
		"fallback": "uix-sharp:lane-closure",
	});
}

export default Component;
