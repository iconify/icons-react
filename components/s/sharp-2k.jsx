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
		"content": `<style>.i5fhr5b7i {
  fill: currentColor;
  d: path("M21 3H3v18h18zM8 12.5v1h3V15H6.5v-3.5h3v-1h-3V9H11v3.5zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z");
}
</style><path class="i5fhr5b7i"/>`,
		"fallback": "ic:sharp-2k",
	});
}

export default Component;
