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
		"content": `<style>.ougbh8bph {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 17.75V14.5C5 13 4 11 4 9c0-3.5 2.75-6 6-6s5.75 2 5.75 5.25L17 11c0 .312-.097.624-.292.815M12.5 17.149v.601M13 7.5h.01m2.24 6.75V17c0 1.25 1 2 2.25 2s2.25-.75 2.25-2v-2.75M17.5 19v2.75");
}
</style><path class="ougbh8bph"/>`,
		"fallback": "uix:neuro-exam",
	});
}

export default Component;
