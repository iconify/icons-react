import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.l0xwc5npf {
  fill: currentColor;
  d: path("M4.004 7.75A2.75 2.75 0 0 1 6.754 5h14.5a2.75 2.75 0 0 1 2.75 2.75v8.5a2.75 2.75 0 0 1-2.75 2.75h-14.5a2.75 2.75 0 0 1-2.75-2.75zm-2 13.5a.75.75 0 0 1 .75-.75H25.25a.75.75 0 0 1 0 1.5H2.755a.75.75 0 0 1-.75-.75");
}
</style><path class="l0xwc5npf"/>`,
		"fallback": "fluent:laptop-28-filled",
	});
}

export default Component;
