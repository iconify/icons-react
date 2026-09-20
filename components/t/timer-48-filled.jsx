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
		"content": `<style>.m1bsh1b8q {
  fill: currentColor;
  d: path("M19.25 5a1.25 1.25 0 1 0 0 2.5h9.5a1.25 1.25 0 1 0 0-2.5zM7 27c0-9.389 7.611-17 17-17s17 7.611 17 17s-7.611 17-17 17S7 36.389 7 27m15.75-.25a1.25 1.25 0 1 0 2.5 0v-9.5a1.25 1.25 0 1 0-2.5 0zm13.616-16.384a1.25 1.25 0 0 1 1.768 0l2.5 2.5a1.25 1.25 0 0 1-1.768 1.768l-2.5-2.5a1.25 1.25 0 0 1 0-1.768");
}
</style><path class="m1bsh1b8q"/>`,
		"fallback": "fluent:timer-48-filled",
	});
}

export default Component;
