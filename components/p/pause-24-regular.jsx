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
		"content": `<style>.e320sybpa {
  fill: currentColor;
  d: path("M6.25 3A2.25 2.25 0 0 0 4 5.25v13.5A2.25 2.25 0 0 0 6.25 21h2.5A2.25 2.25 0 0 0 11 18.75V5.25A2.25 2.25 0 0 0 8.75 3zM5.5 5.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75zM15.25 3A2.25 2.25 0 0 0 13 5.25v13.5A2.25 2.25 0 0 0 15.25 21h2.5A2.25 2.25 0 0 0 20 18.75V5.25A2.25 2.25 0 0 0 17.75 3zm-.75 2.25a.75.75 0 0 1 .75-.75h2.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75z");
}
</style><path class="e320sybpa"/>`,
		"fallback": "fluent:pause-24-regular",
	});
}

export default Component;
