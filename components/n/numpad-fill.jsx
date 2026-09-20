import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.t7ja5ibkg {
  fill: currentColor;
  d: path("M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16M80 164a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m48 120a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m48 80a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12m0-40a12 12 0 1 1 12-12a12 12 0 0 1-12 12");
}
</style><path class="t7ja5ibkg"/>`,
		"fallback": "ph:numpad-fill",
	});
}

export default Component;
