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
		"content": `<style>.ae_ihnb3u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M2 5L22 5M8 5L8 19M16 5L16 16C16 17.6569 17.3431 19 19 19");
}
</style><path class="ae_ihnb3u"/>`,
		"fallback": "keyline-icons:pi",
	});
}

export default Component;
