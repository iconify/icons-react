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
		"content": `<style>.h48ovabea {
  fill: currentColor;
  d: path("M6.366 20.5L2.596 9.192L12 2.616l9.404 6.576l-3.77 11.308z");
}
</style><path class="h48ovabea"/>`,
		"fallback": "material-symbols-light:pentagon",
	});
}

export default Component;
