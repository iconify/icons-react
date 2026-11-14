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
		"content": `<style>.gqznwccuv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7h14v14.5H5Zm4-4.5V7m6-4.5V7m-6.5 7h.01M12 14h.01m3.49 0h.01");
}
</style><path class="gqznwccuv"/>`,
		"fallback": "uix-sharp:socket-tester",
	});
}

export default Component;
