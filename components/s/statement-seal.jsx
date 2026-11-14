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
		"content": `<style>.bo47y8bwm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5V5a2.5 2.5 0 0 1 5 0v5.5m-9.5 0h14v4H5ZM6.5 17h11M3 20.5h18");
}
</style><path class="bo47y8bwm"/>`,
		"fallback": "uix-sharp:statement-seal",
	});
}

export default Component;
