import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w9hob-y4j {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6.5 4H4v4a2 2 0 0 0 2 2h3.5zm4.5 6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-3.5v12z");
}
</style><path class="w9hob-y4j"/>`,
		"fallback": "fluent:layout-column-two-split-left-focus-top-left-20-filled",
	});
}

export default Component;
