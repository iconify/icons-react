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
		"content": `<style>.iv_iwjb5l {
  fill: currentColor;
  d: path("M6.75 9a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5M17 6.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-8 8c0-1.704.775-3.228 1.993-4.237A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.953 0 1.733-.132 2.371-.347A5.5 5.5 0 0 1 9 14.5m1 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m1 0a3.5 3.5 0 0 1 5.596-2.803l-4.9 4.9A3.5 3.5 0 0 1 11 14.5m3.5 3.5c-.786 0-1.512-.26-2.096-.697l4.9-4.9A3.5 3.5 0 0 1 14.5 18");
}
</style><path class="iv_iwjb5l"/>`,
		"fallback": "fluent:people-prohibited-20-filled",
	});
}

export default Component;
