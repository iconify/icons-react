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
		"content": `<style>.pxqp2q3zf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4L8 14.5h9.5m-8.5 0l-.5 5m7.5-5v5m-13-2a18 18 0 0 0 18 0");
}
</style><path class="pxqp2q3zf"/>`,
		"fallback": "uix-sharp:rocking-chair",
	});
}

export default Component;
