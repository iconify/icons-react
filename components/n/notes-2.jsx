import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lvelfnc5e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M35.437 5.54a3.84 3.84 0 0 1 2.994 1.227l2.864 2.904a3.99 3.99 0 0 1 0 5.578l-5.339 5.338l-8.482-8.521l5.339-5.339A4.12 4.12 0 0 1 35.437 5.5zm.52 15.008l-18.96 19.018L5.57 42.5l2.957-11.425l18.949-19.01");
}
</style><path class="lvelfnc5e"/>`,
		"fallback": "arcticons:notes-2",
	});
}

export default Component;
