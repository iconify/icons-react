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
		"content": `<style>.g8a_h-_5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.938 6h12.125A3.94 3.94 0 0 1 22 9.938v1.625a3.94 3.94 0 0 1-3.937 3.937H5.938A3.94 3.94 0 0 1 2 11.563V9.938A3.94 3.94 0 0 1 5.938 6M12 15.5V19m-3.5 0h7");
}
</style><path class="g8a_h-_5e"/>`,
		"fallback": "uix:monitor-ultrawide",
	});
}

export default Component;
