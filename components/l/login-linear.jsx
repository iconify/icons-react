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

.l6-4u2bgq {
  stroke-linejoin: round;
  d: path("M4 12H14M11 15L14 12L11 9");
}

.osb-xbcok {
  d: path("M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4");
}
</style><g class="ipq1z-bjh"><path class="osb-xbcok"/><path class="l6-4u2bgq"/></g>`,
		"fallback": "solar:login-linear",
	});
}

export default Component;
