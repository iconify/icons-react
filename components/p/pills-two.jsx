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
		"content": `<style>.mffsyvrym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.25 9a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m10.5 6a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0M2.25 9h9m1.5 6h9");
}
</style><path class="mffsyvrym"/>`,
		"fallback": "uix:pills-two",
	});
}

export default Component;
