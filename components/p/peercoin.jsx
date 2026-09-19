import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q47xjlb_l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.236 43.5C5.134 41.333 6.635 26.837 7.162 4.515c32.472-.77 43.31 29.179 25.128 37.765c3-15.783-4.366-26.461-16.615-32.386c8.816 6.701 17.047 18.781 11.56 33.606");
}
</style><path class="q47xjlb_l"/>`,
		"fallback": "arcticons:peercoin",
	});
}

export default Component;
