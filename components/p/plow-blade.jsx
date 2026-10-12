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
		"content": `<style>.dl02g5b-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 8.5H14.5l4.5-5h2.25m-10.75 5v4.75m-7.75 7.5h11.5a3 3 0 0 0 2.9-2.2l1.35-5.3h-9a6 6 0 0 0-5.2 3Z");
}
</style><path class="dl02g5b-k"/>`,
		"fallback": "iconoven:plow-blade",
	});
}

export default Component;
