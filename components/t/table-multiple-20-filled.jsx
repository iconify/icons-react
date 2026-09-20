import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.lem5zvbml {
  fill: currentColor;
  d: path("M15.991 5.759A3 3 0 0 1 17 8v4a5 5 0 0 1-5 5H8c-.892 0-1.692-.39-2.241-1.008Q5.879 16 6 16h6a4 4 0 0 0 4-4V6q0-.121-.008-.241M6 15a3 3 0 0 1-3-3h3zm5 0H7v-3h4zm4-3a3 3 0 0 1-3 3v-3zm-9-1H3V7h3zm5 0H7V7h4zm4 0h-3V7h3zM6 6H3a3 3 0 0 1 3-3zm5 0H7V3h4zm1-3a3 3 0 0 1 3 3h-3z");
}
</style><path class="lem5zvbml"/>`,
		"fallback": "fluent:table-multiple-20-filled",
	});
}

export default Component;
