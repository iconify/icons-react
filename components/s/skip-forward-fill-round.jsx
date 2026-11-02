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
		"content": `<style>.ndcw-pbht {
  fill: currentColor;
  d: path("m9.219 4.672l6 4a4 4 0 0 1 0 6.656l-6 4A4 4 0 0 1 3 16V8a4 4 0 0 1 6.219-3.328M19 19V5a1 1 0 0 1 2 0v14a1 1 0 0 1-2 0");
}
</style><path class="ndcw-pbht"/>`,
		"fallback": "coolicons:skip-forward-fill-round",
	});
}

export default Component;
