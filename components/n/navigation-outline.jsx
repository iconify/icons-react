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
		"content": `<style>.pfzn0xbgq {
  fill: currentColor;
  d: path("m5 21l-1-1l8-18l8 18l-1 1l-7-3zm2.1-3.1l4.9-2.1l4.9 2.1l-4.9-11zm4.9-2.1");
}
</style><path class="pfzn0xbgq"/>`,
		"fallback": "material-symbols:navigation-outline",
	});
}

export default Component;
