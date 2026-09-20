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
		"content": `<style>.s0qkzxj2a {
  fill: currentColor;
  d: path("M2.75 5a.75.75 0 0 0 0 1.5h18.5a.75.75 0 0 0 0-1.5zm0 6.5a.75.75 0 0 0 0 1.5H19a2.5 2.5 0 0 1 0 5h-4.44l.72-.72a.75.75 0 1 0-1.06-1.06l-2 2a.75.75 0 0 0 0 1.06l2 2a.75.75 0 1 0 1.06-1.06l-.72-.72H19a4 4 0 0 0 0-8zM2 18.75a.75.75 0 0 1 .75-.75h6.5a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1-.75-.75");
}
</style><path class="s0qkzxj2a"/>`,
		"fallback": "fluent:text-wrap-24-regular",
	});
}

export default Component;
