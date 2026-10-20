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
		"content": `<style>.hew4v6brt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 3L7.0019 3C6.1681 3 5.7005 3.9604 6.2147 4.6168L11.5167 11.3832C11.8005 11.7454 11.8005 12.2546 11.5167 12.6168L6.2147 19.3832C5.7005 20.0396 6.1681 21 7.0019 21L18 21");
}
</style><path class="hew4v6brt"/>`,
		"fallback": "keyline-icons:sigma-duotone",
	});
}

export default Component;
