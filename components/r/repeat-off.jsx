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
		"content": `<style>.ytlamfh-u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 13v-2.5q0-.431.122-.845q.121-.414.354-.777M11.408 7.5H19m-3-3l3 3l-3 3m3.5.5v2.5q0 .431-.121.845q-.122.414-.355.777M12.592 16.5H5m3-3l-3 3l3 3m-4.5-16l17 17");
}
</style><path class="ytlamfh-u"/>`,
		"fallback": "uix:repeat-off",
	});
}

export default Component;
