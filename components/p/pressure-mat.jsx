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
		"content": `<style>.gjlv6zvaz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.461 15h9.078a1.75 1.75 0 0 1 1.477.81l1.272 2a1.75 1.75 0 0 1-1.476 2.69H6.188a1.75 1.75 0 0 1-1.476-2.69l1.272-2A1.75 1.75 0 0 1 7.461 15M12 3v8.5M8.5 8l3.5 3.5L15.5 8");
}
</style><path class="gjlv6zvaz"/>`,
		"fallback": "uix:pressure-mat",
	});
}

export default Component;
