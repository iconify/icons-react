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
		"content": `<style>.abrh7ybcm {
  fill: currentColor;
  d: path("m22 6.92l-1.41-1.41l-2.85 3.21C15.68 6.4 12.83 5 9.61 5C6.72 5 4.07 6.16 2 8l1.42 1.42C5.12 7.93 7.27 7 9.61 7c2.74 0 5.09 1.26 6.77 3.24l-2.88 3.24l-4-4L2 16.99l1.5 1.5l6-6.01l4 4l4.05-4.55c.75 1.35 1.25 2.9 1.44 4.55H21c-.22-2.3-.95-4.39-2.04-6.14z");
}
</style><path class="abrh7ybcm"/>`,
		"fallback": "ic:outline-multiline-chart",
	});
}

export default Component;
