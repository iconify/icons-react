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
		"content": `<style>.lhj4u28at {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12M6 4L3 21M18 4l3 17M10 4v10.5M14 4v10.5m-5 0h6");
}
</style><path class="lhj4u28at"/>`,
		"fallback": "uix-sharp:playground-hotel",
	});
}

export default Component;
