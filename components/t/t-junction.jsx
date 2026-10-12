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
		"content": `<style>.vcmwuqy5m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75h18.5M2.75 12H7.5a1 1 0 0 1 1 1v8.25M21.25 12H16.5a1 1 0 0 0-1 1v8.25M2.75 8.38h2.5m5.5 0h2.5m5.5 0h2.5M12 15.5v3");
}
</style><path class="vcmwuqy5m"/>`,
		"fallback": "iconoven:t-junction",
	});
}

export default Component;
