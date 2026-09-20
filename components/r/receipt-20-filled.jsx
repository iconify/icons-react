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
		"content": `<style>.ueccdgbhv {
  fill: currentColor;
  d: path("M3 5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v7h3v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm11 11a2 2 0 0 0 2-2v-1h-2zM6.5 6a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z");
}
</style><path class="ueccdgbhv"/>`,
		"fallback": "fluent:receipt-20-filled",
	});
}

export default Component;
