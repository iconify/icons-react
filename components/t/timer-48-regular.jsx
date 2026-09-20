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
		"content": `<style>.yyp3vmbew {
  fill: currentColor;
  d: path("M18 6.25c0-.69.56-1.25 1.25-1.25h9.5a1.25 1.25 0 1 1 0 2.5h-9.5c-.69 0-1.25-.56-1.25-1.25m4.75 20.5a1.25 1.25 0 1 0 2.5 0v-9.5a1.25 1.25 0 1 0-2.5 0zM24 10c-9.389 0-17 7.611-17 17s7.611 17 17 17s17-7.611 17-17s-7.611-17-17-17M9.5 27c0-8.008 6.492-14.5 14.5-14.5S38.5 18.992 38.5 27S32.008 41.5 24 41.5S9.5 35.008 9.5 27m28.635-16.635a1.25 1.25 0 1 0-1.768 1.768l2.5 2.5a1.25 1.25 0 0 0 1.768-1.768z");
}
</style><path class="yyp3vmbew"/>`,
		"fallback": "fluent:timer-48-regular",
	});
}

export default Component;
