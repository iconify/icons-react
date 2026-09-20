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
		"content": `<style>.ol2chgtsq {
  fill: currentColor;
  d: path("M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zM6 8a2 2 0 1 1 4 0a2 2 0 0 1-4 0m-.959-.5A3 3 0 0 1 7.5 5.041V4.5a.5.5 0 0 1 1 0v.541A3 3 0 0 1 10.959 7.5h.541a.5.5 0 0 1 0 1h-.541A3 3 0 0 1 8.5 10.959v.541a.5.5 0 0 1-1 0v-.541A3 3 0 0 1 5.041 8.5H4.5a.5.5 0 0 1 0-1zM9 8a1 1 0 1 0-2 0a1 1 0 0 0 2 0");
}
</style><path class="ol2chgtsq"/>`,
		"fallback": "fluent:location-target-square-16-filled",
	});
}

export default Component;
