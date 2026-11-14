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
		"content": `<style>.odktqs_vu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3 9l9-5.5L21 9M5 10.5h14v11H5Zm5 3.5v3.5m4-3.5v3.5");
}
</style><path class="odktqs_vu"/>`,
		"fallback": "uix-sharp:outdoor-plug",
	});
}

export default Component;
