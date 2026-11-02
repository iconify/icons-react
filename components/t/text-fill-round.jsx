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
		"content": `<style>.k56d62gzl {
  fill: currentColor;
  d: path("M5 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0h-4v12h1a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2h1V6H7a1 1 0 0 1-2 0Z");
}
</style><path class="k56d62gzl"/>`,
		"fallback": "coolicons:text-fill-round",
	});
}

export default Component;
