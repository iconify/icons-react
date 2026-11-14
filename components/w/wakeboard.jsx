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
		"content": `<style>.gks7fl1pd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.282 14.475l9.193-9.193a3 3 0 0 1 4.243 0a3 3 0 0 1 0 4.243l-9.193 9.193a3 3 0 0 1-4.243 0a3 3 0 0 1 0-4.243m.177-2.652l6.718 6.718m-.354-13.082l6.718 6.718");
}
</style><path class="gks7fl1pd"/>`,
		"fallback": "uix:wakeboard",
	});
}

export default Component;
