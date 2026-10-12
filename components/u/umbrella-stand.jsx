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
		"content": `<style>.kcjj3vbhl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.25v-5a2 2 0 0 0-4 0v.5m9 4.5v-5.5a2 2 0 0 1 4 0v.5m-12.25 5h11.5l-1 10a1 1 0 0 1-1 1h-7.5a1 1 0 0 1-1-1Zm.35 3.5h10.8");
}
</style><path class="kcjj3vbhl"/>`,
		"fallback": "iconoven:umbrella-stand",
	});
}

export default Component;
