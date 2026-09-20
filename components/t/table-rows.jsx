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
		"content": `<style>.lkpuntb9t {
  fill: currentColor;
  d: path("M20 20H4v-4.592h16zm0-5.592H4V9.587h16zm0-5.821H4V4h16z");
}
</style><path class="lkpuntb9t"/>`,
		"fallback": "material-symbols-light:table-rows",
	});
}

export default Component;
