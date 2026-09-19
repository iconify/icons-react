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
		"content": `<style>.q59alokok {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 18H7V5h10zm-1-6h-3V8h-2v5H8l4 4z");
}
</style><path class="q59alokok"/>`,
		"fallback": "ic:sharp-system-update",
	});
}

export default Component;
