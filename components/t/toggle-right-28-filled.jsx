import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jye4zmbqs {
  fill: currentColor;
  d: path("M26 14a6 6 0 0 0-6-6H8a6 6 0 0 0 0 12h12a6 6 0 0 0 6-6m-7 3a3 3 0 1 1 0-6a3 3 0 0 1 0 6");
}
</style><path class="jye4zmbqs"/>`,
		"fallback": "fluent:toggle-right-28-filled",
	});
}

export default Component;
