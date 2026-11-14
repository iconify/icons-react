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
		"content": `<style>.l00j81hsc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m10 0a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0M6 11h10m1.714 4.199l1.351.732a1.5 1.5 0 0 1 0 2.638l-1.351.732a1.5 1.5 0 0 1-2.214-1.319v-1.464a1.5 1.5 0 0 1 2.214-1.319");
}
</style><path class="l00j81hsc"/>`,
		"fallback": "uix:voicemail-play",
	});
}

export default Component;
