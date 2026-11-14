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
		"content": `<style>.wbo5j5b_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 15h16v6H4Zm8 0V9.5m-3.5-3a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0ZM16 18h.01");
}
</style><path class="wbo5j5b_l"/>`,
		"fallback": "uix-sharp:joystick",
	});
}

export default Component;
