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
		"content": `<style>.by1ogtb4v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5v19m-7.5-15h15M6.5 11h11M6 6.5v-2m3 2v-2m6 2v-2m3 2v-2");
}
</style><path class="by1ogtb4v"/>`,
		"fallback": "uix:telephone-pole",
	});
}

export default Component;
