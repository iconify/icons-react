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
		"content": `<style>.kidbz-ayb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.38 9.62zq.89.88.62 2.91q-.26 2.03-2.38 4.15l-2.3 2.3q-2.12 2.12-4.24 0l-1.06-1.06q-2.12-2.12 0-4.24l2.3-2.3Q9.44 9.26 11.47 9q2.03-.27 2.91.62M11.2 12.8l-3.53 3.53M21.1 2.9l-6.71 6.71");
}
</style><path class="kidbz-ayb"/>`,
		"fallback": "iconoven:screwdriver",
	});
}

export default Component;
