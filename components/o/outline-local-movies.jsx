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
		"content": `<style>.zzdkpcbhn {
  fill: currentColor;
  d: path("M14 5v14h-4V5zm6-2h-2v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2zm-4 6V7h2v2zM6 9V7h2v2zm10 4v-2h2v2zM6 13v-2h2v2zm10 4v-2h2v2zM6 17v-2h2v2z");
}
</style><path class="zzdkpcbhn"/>`,
		"fallback": "ic:outline-local-movies",
	});
}

export default Component;
