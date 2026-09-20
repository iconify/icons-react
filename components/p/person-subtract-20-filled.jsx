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
		"content": `<style>.q0glaq_da {
  fill: currentColor;
  d: path("M10 2a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-4.991 9A2 2 0 0 0 3 13c0 1.691.833 2.966 2.135 3.797C6.417 17.614 8.145 18 10 18q.127 0 .255-.003A5.48 5.48 0 0 1 9 14.5c0-1.33.472-2.55 1.257-3.5zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-7 0a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0-.5.5");
}
</style><path class="q0glaq_da"/>`,
		"fallback": "fluent:person-subtract-20-filled",
	});
}

export default Component;
