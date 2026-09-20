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
		"content": `<style>.h_36vdbri {
  fill: currentColor;
  d: path("M11 4a4 4 0 0 1 0 8H5a4 4 0 0 1 0-8zm-6 6a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="h_36vdbri"/>`,
		"fallback": "fluent:toggle-left-16-filled",
	});
}

export default Component;
