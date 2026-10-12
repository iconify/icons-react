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
		"content": `<style>.fnfmvqbed {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.75v18.5m16-18.5v18.5M4 8h16M4 14h16M4 20h16M7 14v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2m0 6v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2");
}
</style><path class="fnfmvqbed"/>`,
		"fallback": "iconoven:shelving-rack",
	});
}

export default Component;
