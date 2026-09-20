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
		"content": `<style>.le-3gbbyf {
  fill: currentColor;
  d: path("m209.15 60.17l-80-24A4 4 0 0 0 124 40v118.75a44 44 0 1 0 8 25.25V45.38l74.85 22.45a4 4 0 0 0 2.3-7.66M88 220a36 36 0 1 1 36-36a36 36 0 0 1-36 36");
}
</style><path class="le-3gbbyf"/>`,
		"fallback": "ph:music-note-simple-thin",
	});
}

export default Component;
