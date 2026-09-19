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
		"content": `<style>.d9kv9kbue {
  fill: currentColor;
  d: path("m6 14l3 3v5h6v-5l3-3V9H6zm2-3h8v2.17l-3 3V20h-2v-3.83l-3-3zm3-9h2v3h-2zM3.502 5.874L4.916 4.46l2.122 2.12l-1.414 1.415zm13.458.708l2.123-2.12l1.413 1.416l-2.123 2.12z");
}
</style><path class="d9kv9kbue"/>`,
		"fallback": "ic:outline-highlight",
	});
}

export default Component;
