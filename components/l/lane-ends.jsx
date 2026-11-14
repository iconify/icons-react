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
		"content": `<style>.yma7m1bvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 21.5v-19m16 19V14l-7-7V2.5m-1 19v-4m0-3V11");
}
</style><path class="yma7m1bvm"/>`,
		"fallback": "uix-sharp:lane-ends",
	});
}

export default Component;
