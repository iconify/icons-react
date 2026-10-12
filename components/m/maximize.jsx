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
		"content": `<style>.mo12xzdmk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.25 3.75h6v6m0-6L14 10M9.75 20.25h-6v-6m0 6L10 14");
}
</style><path class="mo12xzdmk"/>`,
		"fallback": "iconoven:maximize",
	});
}

export default Component;
