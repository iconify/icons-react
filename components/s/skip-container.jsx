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
		"content": `<style>.kd5bsxbep {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 6.5h19m-17 0L7 18h10l2.5-11.5M3 12.25h2.75m12.5 0H21M2.5 21h19");
}
</style><path class="kd5bsxbep"/>`,
		"fallback": "uix-sharp:skip-container",
	});
}

export default Component;
