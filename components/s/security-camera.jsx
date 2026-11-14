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
		"content": `<style>.ndg1f5x6i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.644 2.808l13.523 3.623l-1.811 6.761L1.833 9.569ZM12 13v4h8m.5-3.5v7M6 8h.01");
}
</style><path class="ndg1f5x6i"/>`,
		"fallback": "uix-sharp:security-camera",
	});
}

export default Component;
