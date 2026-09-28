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
		"content": `<style>.icndgycsf {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 7L3 7L3 21L17 21L17 14M21.2929 2.7071L13.1464 10.8536M22 11L13 11L13 2");
}
</style><path class="icndgycsf"/>`,
		"fallback": "keyline-icons:square-arrow-in-down-left-sharp-fill",
	});
}

export default Component;
