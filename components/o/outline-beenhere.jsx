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
		"content": `<style>.fmoxa2_bw {
  fill: currentColor;
  d: path("M19 1H5c-1.1 0-1.99.9-1.99 2L3 15.93c0 .69.35 1.3.88 1.66L12 23l8.11-5.41c.53-.36.88-.97.88-1.66L21 3c0-1.1-.9-2-2-2m-7 19.6l-7-4.66V3h14v12.93zm-2.01-7.42l-2.58-2.59L6 12l4 4l8-8l-1.42-1.42z");
}
</style><path class="fmoxa2_bw"/>`,
		"fallback": "ic:outline-beenhere",
	});
}

export default Component;
