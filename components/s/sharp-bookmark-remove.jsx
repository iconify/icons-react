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
		"content": `<style>.rcic81-tg {
  fill: currentColor;
  d: path("M21 7h-6V5h6zm-2 3.9c-.64.13-1.32.14-2.02 0c-1.91-.38-3.47-1.92-3.87-3.83A5.02 5.02 0 0 1 14 3H5v18l7-3l7 3z");
}
</style><path class="rcic81-tg"/>`,
		"fallback": "ic:sharp-bookmark-remove",
	});
}

export default Component;
