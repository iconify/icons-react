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
		"content": `<style>.l579zxbsy {
  fill: currentColor;
  d: path("M20 6h-4c0-2.21-1.79-4-4-4S8 3.79 8 6H4v16h16zm-10 5H8V8h2zm2-7c1.1 0 2 .9 2 2h-4c0-1.1.9-2 2-2m4 7h-2V8h2z");
}
</style><path class="l579zxbsy"/>`,
		"fallback": "ic:sharp-shopping-bag",
	});
}

export default Component;
