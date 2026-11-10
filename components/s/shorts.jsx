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
		"content": `<style>.kije3turs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 8V6C4 4.9 4.8954 4 6 4H18C19.1046 4 20 4.9 20 6V8M4 8L2.0338 17.07C1.8211 18.22 2.635 19.31 3.8151 19.46L8.107 19.98C9.1466 20.11 10.1195 19.46 10.3736 18.46L11.4975 14.04C11.6284 13.53 12.3716 13.53 12.5025 14.04L13.6264 18.46C13.8805 19.46 14.8534 20.11 15.893 19.98L20.1849 19.46C21.365 19.31 22.1789 18.22 21.9662 17.07L20 8M4 8H8M20 8H16");
}
</style><path class="kije3turs"/>`,
		"fallback": "keyline-icons:shorts",
	});
}

export default Component;
