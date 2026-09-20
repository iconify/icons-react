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
		"content": `<style>.pjl43hbcj {
  fill: currentColor;
  d: path("M5.754 4a3.75 3.75 0 0 0-3.75 3.75v11.5A3.75 3.75 0 0 0 5.754 23H22.25A3.75 3.75 0 0 0 26 19.25V7.75A3.75 3.75 0 0 0 22.25 4zM11 21.5v-16h11.25a2.25 2.25 0 0 1 2.25 2.25v11.5a2.25 2.25 0 0 1-2.25 2.25zm-6-13a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 8.5m0 5a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 5 13.5m.75 4.25h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1 0-1.5");
}
</style><path class="pjl43hbcj"/>`,
		"fallback": "fluent:panel-left-text-28-filled",
	});
}

export default Component;
