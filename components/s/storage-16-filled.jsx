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
		"content": `<style>.yk29x_bpl {
  fill: currentColor;
  d: path("M3.5 4A2.5 2.5 0 0 0 1 6.5v2A2.5 2.5 0 0 0 3.5 11h9A2.5 2.5 0 0 0 15 8.5v-2A2.5 2.5 0 0 0 12.5 4zM10 7a1 1 0 1 1-2 0a1 1 0 0 1 2 0m2 1a1 1 0 1 1 0-2a1 1 0 0 1 0 2");
}
</style><path class="yk29x_bpl"/>`,
		"fallback": "fluent:storage-16-filled",
	});
}

export default Component;
