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
		"content": `<style>.rm8-zy6cf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.074 29.336l-.162-20.194c.201-3.091-6.673-7.562-8.24-4.2l.162 22.294c-.104 6.994 4.915 6.81 8.24 7.27h10.824c5.004-.1 7.402 7.39 4.523 8.077l-8.4.162c-3.18-.093-5.614-1.387-6.463-3.877");
}
</style><path class="rm8-zy6cf"/>`,
		"fallback": "arcticons:lofter",
	});
}

export default Component;
