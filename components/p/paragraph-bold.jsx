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
		"content": `<style>.epla4-ziz {
  fill: currentColor;
  d: path("M208 36H96a68 68 0 0 0 0 136h36v36a12 12 0 0 0 24 0V60h16v148a12 12 0 0 0 24 0V60h12a12 12 0 0 0 0-24m-76 112H96a44 44 0 0 1 0-88h36Z");
}
</style><path class="epla4-ziz"/>`,
		"fallback": "ph:paragraph-bold",
	});
}

export default Component;
