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
		"content": `<style>.jrq8bnsic {
  fill: currentColor;
  d: path("M1 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v.201L7 7.432l-6-3.23zm6.237 4.44L13 5.337V10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5.337L6.763 8.44a.5.5 0 0 0 .474 0M5 14a2 2 0 0 1-1.732-1H11a3 3 0 0 0 3-3V4.268A2 2 0 0 1 15 6v4a4 4 0 0 1-4 4z");
}
</style><path class="jrq8bnsic"/>`,
		"fallback": "fluent:mail-multiple-16-filled",
	});
}

export default Component;
