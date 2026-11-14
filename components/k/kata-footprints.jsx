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
		"content": `<style>.uqecggamp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 18a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0Zm6.5-6a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0Zm6.5-6a3.25 2.5 0 1 0 6.5 0a3.25 2.5 0 1 0-6.5 0Z");
}
</style><path class="uqecggamp"/>`,
		"fallback": "uix-sharp:kata-footprints",
	});
}

export default Component;
