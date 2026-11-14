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
		"content": `<style>.q83xo_waf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M12 8.5v6M6 11l6-1.5l6 1.5M8 21l4-6.5l4 6.5M4 11.5h.01m15.99 0h.01M6.5 21h.01m10.99 0h.01");
}
</style><path class="q83xo_waf"/>`,
		"fallback": "uix:motion-capture",
	});
}

export default Component;
