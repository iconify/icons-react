import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.je7wuupkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.874 26.237L35 24l3.874-2.237a5.5 5.5 0 0 0-5.5-9.526L29.5 14.474V10a5.5 5.5 0 0 0-11 0v4.474l-3.874-2.237a5.5 5.5 0 0 0-5.5 9.526L13 24l-3.874 2.237a5.5 5.5 0 0 0 5.5 9.526l3.874-2.237V38a5.5 5.5 0 0 0 11 0v-4.474l3.874 2.237a5.5 5.5 0 0 0 5.5-9.526M18.5 14.474L35 24m-16.5 9.526L35 24");
}
</style><path class="je7wuupkr"/>`,
		"fallback": "arcticons:safety",
	});
}

export default Component;
