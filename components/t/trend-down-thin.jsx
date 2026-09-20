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
		"content": `<style>.a_tlkccug {
  fill: currentColor;
  d: path("M236 128v64a4 4 0 0 1-4 4h-64a4 4 0 0 1 0-8h54.34L136 101.66l-37.17 37.17a4 4 0 0 1-5.66 0l-72-72a4 4 0 0 1 5.66-5.66L96 130.34l37.17-37.17a4 4 0 0 1 5.66 0L228 182.34V128a4 4 0 0 1 8 0");
}
</style><path class="a_tlkccug"/>`,
		"fallback": "ph:trend-down-thin",
	});
}

export default Component;
