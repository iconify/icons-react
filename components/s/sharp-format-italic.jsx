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
		"content": `<style>.tqb3xcc4m {
  fill: currentColor;
  d: path("M10 4v3h2.21l-3.42 8H6v3h8v-3h-2.21l3.42-8H18V4z");
}
</style><path class="tqb3xcc4m"/>`,
		"fallback": "ic:sharp-format-italic",
	});
}

export default Component;
