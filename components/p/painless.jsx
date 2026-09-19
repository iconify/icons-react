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
		"content": `<style>.odwnme9-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.389 16.5C24.312 18.332 23 21.012 23 24s1.311 5.668 3.389 7.5H36c4.155 0 7.5-3.345 7.5-7.5s-3.345-7.5-7.5-7.5zM8.5 24H21m-10.436-3.5h10.958m-10.958 7h10.958");
}

.pxu8s8adf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.632 31.5H12c-4.155 0-7.5-3.345-7.5-7.5s3.345-7.5 7.5-7.5h11.632");
}
</style><path class="pxu8s8adf"/><path class="odwnme9-y"/>`,
		"fallback": "arcticons:painless",
	});
}

export default Component;
