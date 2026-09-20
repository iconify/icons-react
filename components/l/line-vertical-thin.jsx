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
		"content": `<style>.cbi3x0bda {
  fill: currentColor;
  d: path("M132 24v208a4 4 0 0 1-8 0V24a4 4 0 0 1 8 0");
}
</style><path class="cbi3x0bda"/>`,
		"fallback": "ph:line-vertical-thin",
	});
}

export default Component;
