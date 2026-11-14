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
		"content": `<style>.d_rtjybvk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.83 2.5h6.34a1.5 1.5 0 0 1 1.471 1.794l-2.55 12.749a1.5 1.5 0 0 0 .093.885l.566 1.322A1.255 1.255 0 0 1 13.596 21h-3.192a1.255 1.255 0 0 1-1.154-1.75l.566-1.322a1.5 1.5 0 0 0 .093-.885L7.359 4.294A1.5 1.5 0 0 1 8.83 2.5");
}
</style><path class="d_rtjybvk"/>`,
		"fallback": "uix:pilsner-glass",
	});
}

export default Component;
