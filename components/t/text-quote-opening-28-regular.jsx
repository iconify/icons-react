import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d9uvsnb8k {
  fill: currentColor;
  d: path("M19.254 23a3.75 3.75 0 0 1-3.747-3.666l-.006-.084a16.4 16.4 0 0 1 2.621-8.969a15.7 15.7 0 0 1 1.808-2.306a12 12 0 0 1 .782-.75l.07-.058l.003-.003a.75.75 0 1 1 .937 1.172l-.005.005l-.033.027q-.047.04-.141.124a10 10 0 0 0-.527.518a14 14 0 0 0-1.633 2.084a14.8 14.8 0 0 0-2.042 4.931A3.75 3.75 0 1 1 19.254 23m-10.5 0a3.75 3.75 0 0 1-3.747-3.666L5 19.25a16.4 16.4 0 0 1 2.621-8.969A15.7 15.7 0 0 1 9.43 7.975a12 12 0 0 1 .782-.75l.07-.058l.003-.003a.75.75 0 1 1 .937 1.172l-.005.005l-.033.027q-.047.04-.141.124a10 10 0 0 0-.527.518a14 14 0 0 0-1.633 2.084a14.8 14.8 0 0 0-2.042 4.931A3.75 3.75 0 1 1 8.754 23m10.5-1.5a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5m-10.5 0a2.25 2.25 0 1 0 0-4.5a2.25 2.25 0 0 0 0 4.5");
}
</style><path class="d9uvsnb8k"/>`,
		"fallback": "fluent:text-quote-opening-28-regular",
	});
}

export default Component;
