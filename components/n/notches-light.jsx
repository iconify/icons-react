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
		"content": `<style>.butafzbhq {
  fill: currentColor;
  d: path("m212.24 132.24l-80 80a6 6 0 1 1-8.48-8.48l80-80a6 6 0 1 1 8.48 8.48m-16-96.48a6 6 0 0 0-8.48 0l-152 152a6 6 0 1 0 8.48 8.48l152-152a6 6 0 0 0 0-8.48");
}
</style><path class="butafzbhq"/>`,
		"fallback": "ph:notches-light",
	});
}

export default Component;
