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
		"content": `<style>.pfkoq_ghz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 16H2.5V3.5h15v9.2M6 3.5V16m6.5-12.5V16m2 2l2.25-2.5h4.75v5h-4.75Zm2.75 0h.01");
}
</style><path class="pfkoq_ghz"/>`,
		"fallback": "uix-sharp:rent-movie",
	});
}

export default Component;
