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
		"content": `<style>.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q_l7eybjl {
  d: path("M22 10C22.0185 10.7271 22 11.0542 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.u00ey8bps {
  cx: 19px;
  cy: 5px;
  r: 3px;
}

.y9p2p-0kn {
  d: path("M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908");
}
</style><g class="ipq1z-bjh"><path class="q_l7eybjl"/><path class="y9p2p-0kn"/><circle class="u00ey8bps"/></g>`,
		"fallback": "solar:letter-unread-line-duotone",
	});
}

export default Component;
