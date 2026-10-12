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
		"content": `<style>.dwv0pachm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.5V6h1.5l3 3.75H19.5l.75 3.75Zm17.5-2.5v5M8.5 13.5l-1.25 4m7.25-4l1.25 4m-11.25 0h14.25l-.5 2.5H4.5v-2Z");
}
</style><path class="dwv0pachm"/>`,
		"fallback": "iconoven:seaplane-sharp",
	});
}

export default Component;
