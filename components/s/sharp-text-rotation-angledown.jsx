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
		"content": `<style>.ixcl1kv6y {
  fill: currentColor;
  d: path("M15 21v-4.24l-1.41 1.41l-9.2-9.19l-1.41 1.41l9.19 9.19L10.76 21zM11.25 8.48l3.54 3.54l-.92 2.19l1.48 1.48l4.42-11.14l-1.06-1.05L7.57 7.92L9.06 9.4zm6.59-3.05l-2.23 4.87l-2.64-2.64z");
}
</style><path class="ixcl1kv6y"/>`,
		"fallback": "ic:sharp-text-rotation-angledown",
	});
}

export default Component;
