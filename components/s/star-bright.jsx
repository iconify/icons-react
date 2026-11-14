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
		"content": `<style>.n39y55b3p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m12 6l1.5 4l4.25.25l-3.25 2.5l1 4L12 14.5l-3.5 2.25l1-4l-3.25-2.5L10.5 10Zm4.75-.5l1-1.5m1.75 10.5l2 .5M12 20v2m-7.5-7.5l-2 .5m4.75-9.5l-1-1.5");
}
</style><path class="n39y55b3p"/>`,
		"fallback": "uix-sharp:star-bright",
	});
}

export default Component;
