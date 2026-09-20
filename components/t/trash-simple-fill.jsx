import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yotqgyb9h {
  fill: currentColor;
  d: path("M224 56a8 8 0 0 1-8 8h-8v144a16 16 0 0 1-16 16H64a16 16 0 0 1-16-16V64h-8a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8M88 32h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16");
}
</style><path class="yotqgyb9h"/>`,
		"fallback": "ph:trash-simple-fill",
	});
}

export default Component;
