import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.crs7liipb {
  fill: currentColor;
  d: path("M2.004 7.75A3.75 3.75 0 0 1 5.754 4H22.25A3.75 3.75 0 0 1 26 7.75v.01l-12 6.147L2.004 7.764zm0 1.699v9.801A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V9.446l-11.658 5.972a.75.75 0 0 1-.684 0z");
}
</style><path class="crs7liipb"/>`,
		"fallback": "fluent:mail-28-filled",
	});
}

export default Component;
