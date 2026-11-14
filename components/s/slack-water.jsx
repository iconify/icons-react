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
		"content": `<style>.i46bs1b-s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5h19M5 9.5h14M2.5 14H11m5.5 1.5V21m3.5-5.5V21");
}
</style><path class="i46bs1b-s"/>`,
		"fallback": "uix-sharp:slack-water",
	});
}

export default Component;
