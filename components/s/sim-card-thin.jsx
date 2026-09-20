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
		"content": `<style>.o6i_jbbqd {
  fill: currentColor;
  d: path("m210.83 85.17l-56-56A4 4 0 0 0 152 28H56a12 12 0 0 0-12 12v176a12 12 0 0 0 12 12h144a12 12 0 0 0 12-12V88a4 4 0 0 0-1.17-2.83M204 216a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V40a4 4 0 0 1 4-4h94.35L204 89.66ZM76 120v72a4 4 0 0 0 4 4h96a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4H80a4 4 0 0 0-4 4m8 4h88v64h-24v-36a4 4 0 0 0-8 0v36h-24v-36a4 4 0 0 0-8 0v36H84Z");
}
</style><path class="o6i_jbbqd"/>`,
		"fallback": "ph:sim-card-thin",
	});
}

export default Component;
