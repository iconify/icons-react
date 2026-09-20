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
		"content": `<style>.awiplub2f {
  fill: currentColor;
  d: path("M11.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0-5A2.5 2.5 0 0 1 14 4.5v2.1A5.5 5.5 0 0 0 6.602 14H4.5A2.5 2.5 0 0 1 2 11.5v-7A2.5 2.5 0 0 1 4.5 2zm0 7a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H13a.5.5 0 0 0 0-1h-1V9.5a.5.5 0 0 0-.5-.5m-6.75 1.25a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-3a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5m0-3a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5M7 4.5a.5.5 0 0 0 0 1h4.5a.5.5 0 0 0 0-1z");
}
</style><path class="awiplub2f"/>`,
		"fallback": "fluent:text-bullet-list-square-clock-16-filled",
	});
}

export default Component;
