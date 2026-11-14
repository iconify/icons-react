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
		"content": `<style>.zrcr1rkmw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 14V5.5a2.5 2.5 0 0 1 5 0V14a4.25 4.25 0 1 1-5 0ZM12 8v8");
}
</style><path class="zrcr1rkmw"/>`,
		"fallback": "uix-sharp:temperature-gauge-device",
	});
}

export default Component;
