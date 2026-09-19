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
		"content": `<style>.yqme15bzm {
  fill: currentColor;
  d: path("M17 4h5v5h-2V6h-3zM4 9V6h3V4H2v5zm16 6v3h-3v2h5v-5zM7 18H4v-3H2v5h5zM18 8H6v8h12z");
}
</style><path class="yqme15bzm"/>`,
		"fallback": "ic:sharp-fit-screen",
	});
}

export default Component;
