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
		"content": `<style>.o1krpdb5b {
  fill: currentColor;
  d: path("M7.75 5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM7 11.75a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75M7.75 14a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="o1krpdb5b"/>`,
		"fallback": "fluent:text-column-one-narrow-20-filled",
	});
}

export default Component;
