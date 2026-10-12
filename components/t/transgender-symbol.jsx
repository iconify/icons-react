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
		"content": `<style>.r6ij0ab6w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8.5a3.75 3.75 0 1 1 0 7.5a3.75 3.75 0 1 1 0-7.5m0 7.5v5.25m-2.25-2.5h4.5m.4-9.15l5.6-5.35m-3.5 0h3.5v3.5M9.35 9.6l-5.6-5.35m3.5 0h-3.5v3.5M5.5 9L9 5.5");
}
</style><path class="r6ij0ab6w"/>`,
		"fallback": "iconoven:transgender-symbol",
	});
}

export default Component;
