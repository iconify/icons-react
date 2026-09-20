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
		"content": `<style>.h9msnvbcu {
  fill: currentColor;
  d: path("m229.5 113l-63.44-23.06L143 26.5a16 16 0 0 0-30 0L89.94 89.94L26.5 113a16 16 0 0 0 0 30l63.44 23.07L113 229.5a16 16 0 0 0 30 0l23.07-63.44L229.5 143a16 16 0 0 0 0-30m-72.42 39.3a8 8 0 0 0-4.78 4.78L128 223.9l-24.3-66.82a8 8 0 0 0-4.78-4.78L32.1 128l66.82-24.3a8 8 0 0 0 4.78-4.78L128 32.1l24.3 66.82a8 8 0 0 0 4.78 4.78L223.9 128Z");
}
</style><path class="h9msnvbcu"/>`,
		"fallback": "ph:star-four",
	});
}

export default Component;
