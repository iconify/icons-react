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
		"content": `<style>.o7-ukn7ow {
  fill: currentColor;
  d: path("m209.15 60.17l-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V93.38l74.85 22.45A4 4 0 0 0 212 112V64a4 4 0 0 0-2.85-3.83M88 220a36 36 0 1 1 36-36a36 36 0 0 1-36 36m116-113.38L132 85V45.38L204 67Z");
}
</style><path class="o7-ukn7ow"/>`,
		"fallback": "ph:music-note-thin",
	});
}

export default Component;
