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
		"content": `<style>.z1nk4lbyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.125 11h11.75a2.625 2.625 0 0 1 2.625 2.625v4.75A2.625 2.625 0 0 1 17.875 21H6.125A2.625 2.625 0 0 1 3.5 18.375v-4.75A2.625 2.625 0 0 1 6.125 11M4.75 11C3 5 7 4 8.5 5.5C10 4 14 5 12.25 11m3.25 0c-.5-4.5 2-7 5.5-7.5c0 4-2.5 6.5-5.5 7.5m-12 5h17M8.5 5.5l.75-2");
}
</style><path class="z1nk4lbyy"/>`,
		"fallback": "uix:local-produce-crate",
	});
}

export default Component;
