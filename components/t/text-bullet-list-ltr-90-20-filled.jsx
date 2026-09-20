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
		"content": `<style>.fy-0tsb6s {
  fill: currentColor;
  d: path("M14 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0M15.25 7a.75.75 0 0 1 .75.75v9.5a.75.75 0 0 1-1.5 0v-9.5a.75.75 0 0 1 .75-.75M11 7.75a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0zm-5 0a.75.75 0 0 0-1.5 0v9.5a.75.75 0 0 0 1.5 0zm4.25-3.25a1.25 1.25 0 1 1 0-2.5a1.25 1.25 0 0 1 0 2.5M4 3.25a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 0 0-2.5 0");
}
</style><path class="fy-0tsb6s"/>`,
		"fallback": "fluent:text-bullet-list-ltr-90-20-filled",
	});
}

export default Component;
