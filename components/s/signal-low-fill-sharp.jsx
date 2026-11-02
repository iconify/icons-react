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
		"content": `<style>.i1hufhbrq {
  fill: currentColor;
  d: path("M9 12a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0Zm-4 8v-4a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0m9-1h.01a1 1 0 0 1 0 2H14a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H18a1 1 0 0 1 0-2");
}
</style><path class="i1hufhbrq"/>`,
		"fallback": "coolicons:signal-low-fill-sharp",
	});
}

export default Component;
