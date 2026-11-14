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
		"content": `<style>.autnc1o3q {
  d: path("M2.5 11.5L12 4l9.5 7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wh6luetrn {
  d: path("M5 10v10h14V10M5 13.5h14M5 16.75h14M16.5 3.5v4");
}
</style><g class="ulnmmdpxh"><path class="autnc1o3q"/><path class="wh6luetrn"/></g>`,
		"fallback": "uix-sharp:lodge",
	});
}

export default Component;
