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
		"content": `<style>.nkkqx5jfc {
  fill: currentColor;
  d: path("M11 3a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0Zm6.657 1.929a1 1 0 1 1 1.414 1.414l-1.414 1.414a.999.999 0 1 1-1.414-1.414ZM4.929 6.343a.999.999 0 1 1 1.414-1.414l1.414 1.414a.999.999 0 1 1-1.414 1.414ZM8 12a4 4 0 1 1 8 0a4 4 0 0 1-8 0m-5 1a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm18-2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2ZM6.343 19.071a1 1 0 1 1-1.414-1.414l1.414-1.414a.999.999 0 1 1 1.414 1.414Zm12.728-1.414a.999.999 0 1 1-1.414 1.414l-1.414-1.414a.999.999 0 1 1 1.414-1.414ZM13 21a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z");
}
</style><path class="nkkqx5jfc"/>`,
		"fallback": "coolicons:sun-fill-round",
	});
}

export default Component;
