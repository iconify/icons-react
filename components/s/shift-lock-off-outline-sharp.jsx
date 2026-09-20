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
		"content": `<style>.a9qewqbvm {
  fill: currentColor;
  d: path("M4 22v-2h16v2zm4-4v-5H3l4.5-5.525L8.925 8.9l-1.7 2.1H10v5h4v-2.025l2 2V18zm7.85-5l-2-2h2.925L12 5.15l-1.8 2.2l-1.425-1.425L12 2l9 11zm4.625 10.3L.675 3.5L2.1 2.075l19.8 19.8zM9.625 12.45");
}
</style><path class="a9qewqbvm"/>`,
		"fallback": "material-symbols:shift-lock-off-outline-sharp",
	});
}

export default Component;
