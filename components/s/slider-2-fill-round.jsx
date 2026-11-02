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
		"content": `<style>.r093a8ojm {
  fill: currentColor;
  d: path("M3 7a1 1 0 0 1 0-2h4.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2h-8.171a3 3 0 0 1-5.658 0Zm0 6a1 1 0 0 1 0-2h10.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2h-2.171a3 3 0 0 1-5.658 0Zm0 6a1 1 0 0 1 0-2h2.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2H10.829a3 3 0 0 1-5.658 0Z");
}
</style><path class="r093a8ojm"/>`,
		"fallback": "coolicons:slider-2-fill-round",
	});
}

export default Component;
