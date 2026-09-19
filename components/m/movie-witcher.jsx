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
		"content": `<style>.p8pfl1b_x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.178 17.951V9.985h-3.68L14.839 33.13L9.18 9.985H5.5V33.55m7.34 2.976l1.999-3.396m6.526-.996l.929 5.881h2.582l5.659-23.145l5.659 23.145h2.581L42.5 14.45m-9.966-2.977l-1.999 3.397");
}
</style><path class="p8pfl1b_x"/>`,
		"fallback": "arcticons:movie-witcher",
	});
}

export default Component;
