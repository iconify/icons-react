import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.q9vt9tb1g {
  fill: currentColor;
  d: path("M2.25 5a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m0 4.25a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m1.25 3a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0M5.75 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM5 8a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5A.75.75 0 0 1 5 8m.75 3.5a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="q9vt9tb1g"/>`,
		"fallback": "fluent:text-bullet-list-16-filled",
	});
}

export default Component;
