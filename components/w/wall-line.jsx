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
		"content": `<style>.cwwmw2x1z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 5h15.5a1.75 1.75 0 0 1 1.75 1.75v10.5A1.75 1.75 0 0 1 19.75 19H4.25a1.75 1.75 0 0 1-1.75-1.75V6.75A1.75 1.75 0 0 1 4.25 5M2.5 12h19M9 5v7m6-7v7m-9.25 0v7M12 12v7m6.25-7v7");
}
</style><path class="cwwmw2x1z"/>`,
		"fallback": "uix:wall-line",
	});
}

export default Component;
