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
		"content": `<style>.m5o9hacpa {
  fill: currentColor;
  d: path("M15.843 17.368a8 8 0 1 1 1.428-1.4l4.427 4.316a1 1 0 1 1-1.396 1.432zM17 11a6 6 0 1 0-12 0a6 6 0 0 0 12 0");
}
</style><path class="m5o9hacpa"/>`,
		"fallback": "fluent:search-24-filled",
	});
}

export default Component;
