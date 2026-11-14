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
		"content": `<style>.w4wc5tbyk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0ZM7 12h.01M8.5 8.5h.01M12 7h.01m3.49 1.5h.01M17 12h.01m-6.51 5h3");
}
</style><path class="w4wc5tbyk"/>`,
		"fallback": "uix-sharp:midi-cable",
	});
}

export default Component;
