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
		"content": `<style>.zhm75tbgd {
  fill: currentColor;
  d: path("M19 4a1 1 0 1 1 0 2h-3.56l-4.551 12H14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2h3.75l4.552-12H10a1 1 0 0 1 0-2z");
}
</style><path class="zhm75tbgd"/>`,
		"fallback": "fluent:text-italic-24-filled",
	});
}

export default Component;
