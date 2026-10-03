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
		"content": `<style>.g41uuudiv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 11C2 9.3431 3.3431 8 5 8L19 8C20.6569 8 22 9.3431 22 11L22 18C22 19.6569 20.6569 21 19 21L5 21C3.3431 21 2 19.6569 2 18L2 11ZM8 3L12 8L16 3");
}
</style><path class="g41uuudiv"/>`,
		"fallback": "keyline-icons:tv",
	});
}

export default Component;
