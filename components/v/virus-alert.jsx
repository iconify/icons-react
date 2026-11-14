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
		"content": `<style>.hnepr8b9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 10.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0Zm3.25-6V7m0 7v2.5m-6-6H6m7 0h2.5M7 8L5.25 6.25M12 8l1.75-1.75M7 13l-1.75 1.75M12 13l1.75 1.75M18 15v3.25M18 21h.01");
}
</style><path class="hnepr8b9s"/>`,
		"fallback": "uix-sharp:virus-alert",
	});
}

export default Component;
