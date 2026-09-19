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
		"content": `<style>.rawqa4bii {
  fill: currentColor;
  d: path("M10 9h4V6h3l-5-5l-5 5h3zm-1 1H6V7l-5 5l5 5v-3h3zm14 2l-5-5v3h-3v4h3v3zm-9 3h-4v3H7l5 5l5-5h-3z");
}
</style><path class="rawqa4bii"/>`,
		"fallback": "ic:outline-open-with",
	});
}

export default Component;
