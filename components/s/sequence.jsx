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
		"content": `<style>.hs28k5baw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 4.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m.75 7.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M12 7v2m0 6v2");
}
</style><path class="hs28k5baw"/>`,
		"fallback": "uix:sequence",
	});
}

export default Component;
