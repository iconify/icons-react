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
		"content": `<style>.p3lzxzmya {
  fill: currentColor;
  d: path("M25 22a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2zM7.5 8a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m-3 5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM25 16a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2h-9a1 1 0 1 1 0-2zm0-6a1 1 0 1 1 0 2H7a1 1 0 0 1 0-2z");
}
</style><path class="p3lzxzmya"/>`,
		"fallback": "fluent:text-collapse-28-filled",
	});
}

export default Component;
