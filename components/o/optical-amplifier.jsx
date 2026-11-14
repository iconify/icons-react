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
		"content": `<style>.d-m2eq_7g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7 5l11.5 7L7 19Zm-4.5 7H7m11.5 0h3M10 12h3m-1.5-1.5v3");
}
</style><path class="d-m2eq_7g"/>`,
		"fallback": "uix-sharp:optical-amplifier",
	});
}

export default Component;
