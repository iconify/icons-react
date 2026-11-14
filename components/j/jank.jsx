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
		"content": `<style>.pqwlyp34x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13.5C3.75 9 6.75 9 8 13.5m0 0l2 5.5l2.5-14l2 9.5m0 0c1.5 4 5.5 4 7-1");
}
</style><path class="pqwlyp34x"/>`,
		"fallback": "uix-sharp:jank",
	});
}

export default Component;
