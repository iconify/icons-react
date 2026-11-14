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
		"content": `<style>.lxr9eab_q {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 1.75h6.5q1.864 0 3.182 1.318T19.75 6.25t-1.318 3.182t-3.182 1.318h-1v2.5h1q1.864 0 3.182 1.318t1.318 3.182t-1.318 3.182t-3.182 1.318h-6.5q-1.864 0-3.182-1.318T4.25 17.75t1.318-3.182T8.75 13.25h1v-2.5h-1q-1.864 0-3.182-1.318T4.25 6.25t1.318-3.182T8.75 1.75m2.5 9v2.5h1.5v-2.5z");
}
</style><path class="lxr9eab_q"/>`,
		"fallback": "uix-solid:pull-buoy",
	});
}

export default Component;
