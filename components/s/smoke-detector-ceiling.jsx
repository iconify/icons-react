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
		"content": `<style>.j2924h81u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M5.5 4a6.5 6 0 0 0 13 0M12 7h.01m5.24 6.093a10.5 10.5 0 0 1-10.5 0M19.5 16.99a15 15 0 0 1-15 0");
}
</style><path class="j2924h81u"/>`,
		"fallback": "uix-sharp:smoke-detector-ceiling",
	});
}

export default Component;
