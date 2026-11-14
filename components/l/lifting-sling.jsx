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
		"content": `<style>.k-9dpk9hv {
  d: path("m7 14l5-5.5l5 5.5M3.5 14h17v7.5h-17Z");
}

.tp-0vzbpb {
  d: path("M14 2.5v4a2 2 0 0 1-4 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tp-0vzbpb"/><path class="k-9dpk9hv"/></g>`,
		"fallback": "uix-sharp:lifting-sling",
	});
}

export default Component;
