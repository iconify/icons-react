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
		"content": `<style>.veti85bza {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v3.5h6V4zm4 12v-5.5H4V14a2 2 0 0 0 2 2z");
}
</style><path class="veti85bza"/>`,
		"fallback": "fluent:layout-column-two-split-left-focus-right-20-filled",
	});
}

export default Component;
