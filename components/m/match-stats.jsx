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
		"content": `<style>.d4zvjubmt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.75h18m-15.375-9.5za1.625 1.625 0 0 1 1.625 1.625v3.5A1.625 1.625 0 0 1 5.625 17A1.625 1.625 0 0 1 4 15.375v-3.5a1.625 1.625 0 0 1 1.625-1.625m6.25-6zA1.625 1.625 0 0 1 13.5 5.875v9.5A1.625 1.625 0 0 1 11.875 17a1.625 1.625 0 0 1-1.625-1.625v-9.5a1.625 1.625 0 0 1 1.625-1.625m6.25 3.5za1.625 1.625 0 0 1 1.625 1.625v6A1.625 1.625 0 0 1 18.125 17a1.625 1.625 0 0 1-1.625-1.625v-6a1.625 1.625 0 0 1 1.625-1.625");
}
</style><path class="d4zvjubmt"/>`,
		"fallback": "uix:match-stats",
	});
}

export default Component;
