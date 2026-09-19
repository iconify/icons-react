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
		"content": `<style>.ch44d1bbl {
  fill: currentColor;
  d: path("M9 2h9c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2h2v2h9V4H9v2H7V4c0-1.1.9-2 2-2");
}

.p447q8byu {
  fill: currentColor;
  d: path("M10.09 15.59L11.5 17l5-5l-5-5l-1.41 1.41L12.67 11H3v2h9.67z");
}
</style><path class="ch44d1bbl"/><path class="p447q8byu"/>`,
		"fallback": "ic:twotone-log-in",
	});
}

export default Component;
