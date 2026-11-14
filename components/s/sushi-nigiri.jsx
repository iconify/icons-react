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
		"content": `<style>.mm-1nbcrp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 12h12.5a1.25 1.25 0 0 1 1.25 1.25v4a1.25 1.25 0 0 1-1.25 1.25H5.75a1.25 1.25 0 0 1-1.25-1.25v-4A1.25 1.25 0 0 1 5.75 12ZM3.5 12C3.5 9.25 6 8 9 8h8c2.5 0 4 1.5 3.5 4ZM10 8l-1 4m5-4l-1 4");
}
</style><path class="mm-1nbcrp"/>`,
		"fallback": "uix-sharp:sushi-nigiri",
	});
}

export default Component;
