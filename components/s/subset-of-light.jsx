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
		"content": `<style>.e9cu8_ejv {
  fill: currentColor;
  d: path("M206 208a6 6 0 0 1-6 6H48a6 6 0 0 1 0-12h152a6 6 0 0 1 6 6m-6-46h-96a50 50 0 0 1 0-100h96a6 6 0 0 0 0-12h-96a62 62 0 0 0 0 124h96a6 6 0 0 0 0-12");
}
</style><path class="e9cu8_ejv"/>`,
		"fallback": "ph:subset-of-light",
	});
}

export default Component;
