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
		"content": `<style>.ezp-ddcei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-11-6h3v6h-3Zm1.5 0v-2m-1-1q-4.5-9.5-8.5-1m10.5 1q4.5-9.5 8.5-1M3 15h.01M21 15h.01");
}
</style><path class="ezp-ddcei"/>`,
		"fallback": "uix-sharp:irrigation-system",
	});
}

export default Component;
