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
		"content": `<style>.td43dj0tz {
  fill: currentColor;
  d: path("M3 9h1.465l3.703-5.555a1 1 0 0 1 1.664 1.11L6.869 9h10.262l-2.963-4.445a1 1 0 0 1 1.664-1.11L19.535 9H21a1 1 0 0 1 0 2h-.246l-1.792 6.275c-.396 1.384-1.262 2.775-2.602 3.41A3.2 3.2 0 0 1 15 21H9a3.2 3.2 0 0 1-1.36-.315c-1.34-.635-2.206-2.026-2.602-3.41L3.246 11H3a1 1 0 0 1 0-2m8 8v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0m4 0v-4a1 1 0 0 0-2 0v4a1 1 0 0 0 2 0");
}
</style><path class="td43dj0tz"/>`,
		"fallback": "coolicons:shopping-basket-fill-round",
	});
}

export default Component;
