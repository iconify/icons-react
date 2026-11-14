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
		"content": `<style>.b2z674b-v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.5H2.5V8h19v3.1m-.4 10.4h-.6M9.5 8V6a2.5 2.5 0 0 1 5 0v2M6 11.75h.01m2.99 0h.01m-3.01 3h.01m2.99 0h.01m-3.01 3h.01m2.99 0h.01m5.49 2a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3-1.25l3.75-3.75m-1.5 1.5l1.5 1.5");
}
</style><path class="b2z674b-v"/>`,
		"fallback": "uix-sharp:key-safe",
	});
}

export default Component;
