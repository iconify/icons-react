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
		"content": `<style>.k3w6plbqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 9L12 4l7.5 5m-15 5L12 9l7.5 5m-15 5l7.5-5l7.5 5");
}
</style><path class="k3w6plbqk"/>`,
		"fallback": "uix-sharp:job-level",
	});
}

export default Component;
