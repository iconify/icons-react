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
		"content": `<style>.ooicogbye {
  fill: currentColor;
  d: path("M6 2.5A3.5 3.5 0 0 0 2.5 6v8A3.5 3.5 0 0 0 6 17.5h8a3.5 3.5 0 0 0 3.5-3.5V6A3.5 3.5 0 0 0 14 2.5zM4 6a2 2 0 0 1 2-2h1v3H4zm0 4h3V7h3V4h3v3h3v3h-3v3h3v1a2 2 0 0 1-2 2h-1v-3h-3v3H7v-3H4zm6 0v3H7v-3zm0 0h3V7h-3z");
}
</style><path class="ooicogbye"/>`,
		"fallback": "fluent:transparency-square-20-filled",
	});
}

export default Component;
