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
		"content": `<style>.ndqc9cboe {
  fill: currentColor;
  d: path("M18 4v16H6V8.83L10.83 4zm0-2h-8L4 8v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2M9 7h2v4H9zm3 0h2v4h-2zm3 0h2v4h-2z");
}
</style><path class="ndqc9cboe"/>`,
		"fallback": "ic:outline-sd-storage",
	});
}

export default Component;
