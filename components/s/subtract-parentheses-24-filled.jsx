import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.sa6fp0b6d {
  fill: currentColor;
  d: path("M6.667 6.037a1 1 0 1 0-1.334-1.49A9.98 9.98 0 0 0 2 12a9.98 9.98 0 0 0 3.714 7.777a1 1 0 0 0 1.258-1.555A7.98 7.98 0 0 1 4 12a7.98 7.98 0 0 1 2.667-5.963m12-1.49a1 1 0 1 0-1.334 1.49A7.98 7.98 0 0 1 20 12a7.98 7.98 0 0 1-2.667 5.963a1 1 0 0 0 1.334 1.49A9.98 9.98 0 0 0 22 12a9.98 9.98 0 0 0-3.333-7.454M7 12a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1");
}
</style><path class="sa6fp0b6d"/>`,
		"fallback": "fluent:subtract-parentheses-24-filled",
	});
}

export default Component;
