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
		"content": `<style>.lj52kjzpn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 15h18q-.5 5.5-9 5.5T3 15m7.5 0V7.5h3V15m-3-7.5q-4.5-1-5 4.5m8-4.5q4.5-1 5 4.5M12 3.75h.01");
}
</style><path class="lj52kjzpn"/>`,
		"fallback": "uix:pet-water-fountain",
	});
}

export default Component;
