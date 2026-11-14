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
		"content": `<style>.a1fluic_b {
  d: path("M12 17.5c0-2-1.75-3.25-4-3.25c0 2 1.75 3.25 4 3.25Zm0-1c0-2 1.75-3.25 4-3.25c0 2-1.75 3.25-4 3.25Z");
}

.hf18p1lnb {
  d: path("M3 20.5v-8a9 9 0 0 1 18 0v8Zm.25-10h17.5M12 3.5v7m0 10V15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hf18p1lnb"/><path class="a1fluic_b"/></g>`,
		"fallback": "uix-sharp:pin-greenhouse",
	});
}

export default Component;
