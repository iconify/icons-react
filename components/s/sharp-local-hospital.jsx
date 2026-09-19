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
		"content": `<style>.sajzmmbry {
  fill: currentColor;
  d: path("M21 3H3.01L3 21h18zm-3 11h-4v4h-4v-4H6v-4h4V6h4v4h4z");
}
</style><path class="sajzmmbry"/>`,
		"fallback": "ic:sharp-local-hospital",
	});
}

export default Component;
