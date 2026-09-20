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
		"content": `<style>.w5bhryv8y {
  fill: currentColor;
  d: path("M236 128v56a4 4 0 0 1-4 4H128a4 4 0 0 1-4-4V76H28v52a4 4 0 0 1-8 0V72a4 4 0 0 1 4-4h104a4 4 0 0 1 4 4v108h96v-52a4 4 0 0 1 8 0");
}
</style><path class="w5bhryv8y"/>`,
		"fallback": "ph:wave-square-thin",
	});
}

export default Component;
