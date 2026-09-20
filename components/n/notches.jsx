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
		"content": `<style>.mh6i5obdq {
  fill: currentColor;
  d: path("m213.66 133.66l-80 80a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 11.32m-16-99.32a8 8 0 0 0-11.32 0l-152 152a8 8 0 0 0 11.32 11.32l152-152a8 8 0 0 0 0-11.32");
}
</style><path class="mh6i5obdq"/>`,
		"fallback": "ph:notches",
	});
}

export default Component;
