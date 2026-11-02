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
		"content": `<style>.r8vghd45x {
  fill: currentColor;
  d: path("M17 3a1 1 0 0 1 .848 1.53L8.804 19H17a1 1 0 0 1 0 2H7a1 1 0 0 1-.848-1.53L15.196 5H7a1 1 0 0 1 0-2Z");
}
</style><path class="r8vghd45x"/>`,
		"fallback": "coolicons:letter-z-fill-sharp",
	});
}

export default Component;
