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
		"content": `<style>.zgf0puhyb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 4.503L21 18C21 19.6569 19.6569 21 18 21L4.503 21C3.1667 21 2.4974 19.3843 3.4423 18.4393L18.4393 3.4423C19.3843 2.4974 21 3.1667 21 4.503Z");
}
</style><path class="zgf0puhyb"/>`,
		"fallback": "keyline-icons:triangle-right-duotone",
	});
}

export default Component;
