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
		"content": `<style>.jq79eybvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 12.5l5.5-7l3.5 4l3.5-5l6.5 8Zm1.5 3l4 4l3.5-3l3.5 4l5-5");
}
</style><path class="jq79eybvu"/>`,
		"fallback": "uix-sharp:lake-mountains",
	});
}

export default Component;
