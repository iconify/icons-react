import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sde38mb9b {
  fill: currentColor;
  d: path("M10.5 1A2.5 2.5 0 0 1 13 3.5v9a2.5 2.5 0 0 1-2.5 2.5h-5A2.5 2.5 0 0 1 3 12.5v-9A2.5 2.5 0 0 1 5.5 1zM7.528 5.902A1 1 0 0 0 6 6.751v2.493a1 1 0 0 0 1.528.849L9.53 8.847a1 1 0 0 0 0-1.698z");
}
</style><path class="sde38mb9b"/>`,
		"fallback": "fluent:video-short-16-filled",
	});
}

export default Component;
