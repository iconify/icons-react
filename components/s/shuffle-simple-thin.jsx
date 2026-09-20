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
		"content": `<style>.u5v92zxlz {
  fill: currentColor;
  d: path("M212 48v40a4 4 0 0 1-8 0V57.66l-50.54 50.54a4 4 0 1 1-5.66-5.66L198.34 52H168a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4m-4 116a4 4 0 0 0-4 4v30.34L50.83 45.17a4 4 0 0 0-5.66 5.66L198.34 204H168a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4m-105.46-16.2l-57.37 57.37a4 4 0 0 0 5.66 5.66l57.37-57.37a4 4 0 1 0-5.66-5.66");
}
</style><path class="u5v92zxlz"/>`,
		"fallback": "ph:shuffle-simple-thin",
	});
}

export default Component;
