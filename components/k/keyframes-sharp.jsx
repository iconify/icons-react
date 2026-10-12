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
		"content": `<style>.b-gxsgb_c {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.4343 3L15.8685 12L9.4343 21L3 12L9.4343 3ZM14.8048 2.5482L21 12L14.8048 21.4518");
}
</style><path class="b-gxsgb_c"/>`,
		"fallback": "keyline-icons:keyframes-sharp",
	});
}

export default Component;
