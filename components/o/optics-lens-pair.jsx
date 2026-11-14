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
		"content": `<style>.tv2q0gx6p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 12a2 7 0 1 0 4 0a2 7 0 1 0-4 0Zm8 0a2 7 0 1 0 4 0a2 7 0 1 0-4 0ZM2.5 12h19");
}
</style><path class="tv2q0gx6p"/>`,
		"fallback": "uix-sharp:optics-lens-pair",
	});
}

export default Component;
