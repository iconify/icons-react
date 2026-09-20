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
		"content": `<style>.o2qd2hb1p {
  fill: currentColor;
  d: path("M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0");
}
</style><path class="o2qd2hb1p"/>`,
		"fallback": "ph:line-vertical",
	});
}

export default Component;
