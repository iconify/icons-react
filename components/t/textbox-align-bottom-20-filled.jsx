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
		"content": `<style>.ikbom4bsd {
  fill: currentColor;
  d: path("M5.5 3A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9a2.5 2.5 0 0 0 2.5-2.5v-9A2.5 2.5 0 0 0 14.5 3zm1 7h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1m0 3h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1");
}
</style><path class="ikbom4bsd"/>`,
		"fallback": "fluent:textbox-align-bottom-20-filled",
	});
}

export default Component;
