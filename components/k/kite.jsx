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
		"content": `<style>.x9rx84ijy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 2.5l6 5l-6 7l-6-7Zm0 0v12m-6-7h12m-6 7q0 5 5 6.5m-5.25-2.5l2-1.25m.75 4l1.25-2");
}
</style><path class="x9rx84ijy"/>`,
		"fallback": "uix-sharp:kite",
	});
}

export default Component;
