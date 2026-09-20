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
		"content": `<style>.gziwnon6m {
  fill: currentColor;
  d: path("M204 64v80a76 76 0 0 1-152 0V64a4 4 0 0 1 8 0v80a68 68 0 0 0 136 0V64a4 4 0 0 1 8 0");
}
</style><path class="gziwnon6m"/>`,
		"fallback": "ph:union-thin",
	});
}

export default Component;
