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
		"content": `<style>.rds65xbce {
  fill: currentColor;
  d: path("M208 40H96a64 64 0 0 0 0 128h40v40a8 8 0 0 0 16 0V56h24v152a8 8 0 0 0 16 0V56h16a8 8 0 0 0 0-16m-72 112H96a48 48 0 0 1 0-96h40Z");
}
</style><path class="rds65xbce"/>`,
		"fallback": "ph:paragraph",
	});
}

export default Component;
