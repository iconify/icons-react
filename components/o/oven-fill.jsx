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
		"content": `<style>.xpwy6fjug {
  fill: currentColor;
  d: path("M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-36 24a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-44 0a12 12 0 1 1-12 12a12 12 0 0 1 12-12m108 136H64v-88h128Z");
}
</style><path class="xpwy6fjug"/>`,
		"fallback": "ph:oven-fill",
	});
}

export default Component;
