import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.juc8pebst {
  fill: currentColor;
  d: path("M7 8V5l-7 7l7 7v-3l-4-4zm6 1V5l-7 7l7 7v-4.1c5 0 8.5 1.6 11 5.1c-1-5-4-10-11-11");
}
</style><path class="juc8pebst"/>`,
		"fallback": "ic:outline-reply-all",
	});
}

export default Component;
