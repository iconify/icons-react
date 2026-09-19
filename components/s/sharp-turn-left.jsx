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
		"content": `<style>.fh1o-tbgy {
  fill: currentColor;
  d: path("m6.83 11l1.58 1.59L7 14l-4-4l4-4l1.41 1.41L6.83 9H17v11h-2v-9z");
}
</style><path class="fh1o-tbgy"/>`,
		"fallback": "ic:sharp-turn-left",
	});
}

export default Component;
