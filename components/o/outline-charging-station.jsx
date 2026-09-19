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
		"content": `<style>.lo-7uxb5a {
  fill: currentColor;
  d: path("m14.5 11l-3 6v-4h-2l3-6v4zM17 3H7v1h10zm0 17H7v1h10zm0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zM7 18h10V6H7z");
}
</style><path class="lo-7uxb5a"/>`,
		"fallback": "ic:outline-charging-station",
	});
}

export default Component;
