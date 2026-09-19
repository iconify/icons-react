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
		"content": `<style>.lvsgf9bmf {
  fill: currentColor;
  d: path("M21 3H3v18h18zM11 9v6H6.5v-1.5h3v-1h-2v-1h2v-1h-3V9zm7 6h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z");
}
</style><path class="lvsgf9bmf"/>`,
		"fallback": "ic:sharp-3k",
	});
}

export default Component;
