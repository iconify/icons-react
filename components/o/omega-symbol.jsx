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
		"content": `<style>.a_d6s9kdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 20v-2.5a7 7 0 1 1 7 0V20M3 20h5.5m7 0H21");
}
</style><path class="a_d6s9kdb"/>`,
		"fallback": "uix-sharp:omega-symbol",
	});
}

export default Component;
