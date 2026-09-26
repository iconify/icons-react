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
		"content": `<style>.ma6hw-ozv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 12L7 7L12 12L21.4 2.6M14.8284 14.8284L21.4 21.4M16 2L21.5 2C21.7761 2 22 2.2239 22 2.5L22 8M16 22L21.5 22C21.7761 22 22 21.7761 22 21.5L22 16");
}
</style><path class="ma6hw-ozv"/>`,
		"fallback": "keyline-icons:trending-up-down-duotone",
	});
}

export default Component;
