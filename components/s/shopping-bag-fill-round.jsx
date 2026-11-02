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
		"content": `<style>.vaobu8b1g {
  fill: currentColor;
  d: path("M8.106 5.079a4.001 4.001 0 0 1 7.788 0A5.006 5.006 0 0 1 20 10v7a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 22H9a5 5 0 0 1-5-5v-7a5.006 5.006 0 0 1 4.106-4.921M10.267 5h3.466a2 2 0 0 0-3.466 0");
}
</style><path class="vaobu8b1g"/>`,
		"fallback": "coolicons:shopping-bag-fill-round",
	});
}

export default Component;
