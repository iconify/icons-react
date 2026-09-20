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
		"content": `<style>.yrnjvkbdu {
  fill: currentColor;
  d: path("M236 56v64a4 4 0 0 1-8 0V65.66l-89.17 89.17a4 4 0 0 1-5.66 0L96 117.66l-69.17 69.17a4 4 0 0 1-5.66-5.66l72-72a4 4 0 0 1 5.66 0L136 146.34L222.34 60H168a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4");
}
</style><path class="yrnjvkbdu"/>`,
		"fallback": "ph:trend-up-thin",
	});
}

export default Component;
