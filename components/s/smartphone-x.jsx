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
		"content": `<style>.gf1o5bclw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5h12v19H6ZM10.5 18h3M10 8l4 4m0-4l-4 4");
}
</style><path class="gf1o5bclw"/>`,
		"fallback": "uix-sharp:smartphone-x",
	});
}

export default Component;
