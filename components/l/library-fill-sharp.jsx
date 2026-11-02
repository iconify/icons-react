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
		"content": `<style>.s9437jbon {
  fill: currentColor;
  d: path("M7 2v20H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1Zm2 0h3a1 1 0 0 1 1 1v.719l2.757-.689a1 1 0 0 1 1.213.727l4 16a1 1 0 0 1-.727 1.213l-4 1a1 1 0 0 1-1.213-.727L13 13.123V21a1 1 0 0 1-1 1H9Z");
}
</style><path class="s9437jbon"/>`,
		"fallback": "coolicons:library-fill-sharp",
	});
}

export default Component;
