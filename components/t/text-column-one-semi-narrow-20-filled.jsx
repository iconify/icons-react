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
		"content": `<style>.u75f-pb5z {
  fill: currentColor;
  d: path("M6.75 5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zM6 11.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75M6.75 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="u75f-pb5z"/>`,
		"fallback": "fluent:text-column-one-semi-narrow-20-filled",
	});
}

export default Component;
