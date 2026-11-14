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
		"content": `<style>.yr0jjv4cx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19L18 7M7.5 20.5l13-12m-16-4L9 9m6-5l-3 5.5");
}
</style><path class="yr0jjv4cx"/>`,
		"fallback": "uix-sharp:travel-ski-cover",
	});
}

export default Component;
