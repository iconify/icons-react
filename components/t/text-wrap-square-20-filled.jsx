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
		"content": `<style>.dzw3a9bnd {
  fill: currentColor;
  d: path("M2.75 3.5a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75m0 12a.75.75 0 0 1 .75-.75h13a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1-.75-.75m.75-9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm11.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M3.5 8.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm11.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75M3.5 11.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5zm11.25.75a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1-.75-.75m-7-4a2.25 2.25 0 0 1 4.5 0v5a.75.75 0 0 0 1.5 0v-5a3.75 3.75 0 1 0-7.5 0v5a.75.75 0 0 0 1.5 0z");
}
</style><path class="dzw3a9bnd"/>`,
		"fallback": "fluent:text-wrap-square-20-filled",
	});
}

export default Component;
