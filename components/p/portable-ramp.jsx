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
		"content": `<style>.j51mwkb-t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.5 17.5v-11h6v11m-19 0h19m-19 0L7.75 13m2.5-2l5.25-4.5m-8 5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}
</style><path class="j51mwkb-t"/>`,
		"fallback": "uix-sharp:portable-ramp",
	});
}

export default Component;
