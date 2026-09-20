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
		"content": `<style>.kl8--lo7k {
  fill: currentColor;
  d: path("M6 3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm4 6.5V4h4a2 2 0 0 1 2 2v3.5zm6 1V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5z");
}
</style><path class="kl8--lo7k"/>`,
		"fallback": "fluent:layout-row-two-split-top-focus-top-left-20-filled",
	});
}

export default Component;
