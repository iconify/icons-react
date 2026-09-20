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
		"content": `<style>.kp91cnxcc {
  fill: currentColor;
  d: path("M140 24v208a12 12 0 0 1-24 0V24a12 12 0 0 1 24 0");
}
</style><path class="kp91cnxcc"/>`,
		"fallback": "ph:line-vertical-bold",
	});
}

export default Component;
