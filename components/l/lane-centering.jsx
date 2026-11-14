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
		"content": `<style>.u7qisy4_r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 20.5L8 3.5m12.5 17L16 3.5M12 20V8m-2.5 2.5L12 8l2.5 2.5");
}
</style><path class="u7qisy4_r"/>`,
		"fallback": "uix-sharp:lane-centering",
	});
}

export default Component;
