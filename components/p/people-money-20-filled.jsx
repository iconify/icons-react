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
		"content": `<style>.ilyzgvbbu {
  fill: currentColor;
  d: path("M6.75 9a3.25 3.25 0 1 0 0-6.5a3.25 3.25 0 0 0 0 6.5M9 12.5a2.5 2.5 0 0 1 1.707-2.371A2 2 0 0 0 10 10H3.5a2 2 0 0 0-2 2s0 4 5.25 4c.897 0 1.64-.117 2.257-.31A3 3 0 0 1 9 15.5zm8-6a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-7 6a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5zm1 0v1a1.5 1.5 0 0 0 1.5-1.5h-1a.5.5 0 0 1-.5.5m7 1v-1a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5M16.5 16h1a.5.5 0 0 1 .5-.5v-1a1.5 1.5 0 0 0-1.5 1.5M11 14.5v1a.5.5 0 0 1 .5.5h1a1.5 1.5 0 0 0-1.5-1.5m3.5 1a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3");
}
</style><path class="ilyzgvbbu"/>`,
		"fallback": "fluent:people-money-20-filled",
	});
}

export default Component;
