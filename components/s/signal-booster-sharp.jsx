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
		"content": `<style>.dal61ng0h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 20.25v-2.5m4.75 2.5v-6m5 6v-10m4.75 10V3.75");
}
</style><path class="dal61ng0h"/>`,
		"fallback": "iconoven:signal-booster-sharp",
	});
}

export default Component;
