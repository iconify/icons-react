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
		"content": `<style>.s4o89wq7o {
  fill: currentColor;
  d: path("M5.5 2A1.5 1.5 0 0 0 4 3.5v13A1.5 1.5 0 0 0 5.5 18h4.757a5.5 5.5 0 0 1-1.235-3H7.5a.5.5 0 0 1 0-1h1.522A5.5 5.5 0 0 1 14 9.022V3.5A1.5 1.5 0 0 0 12.5 2zM19 14.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M14.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H16a.5.5 0 0 0 0-1h-1v-1.5a.5.5 0 0 0-.5-.5");
}
</style><path class="s4o89wq7o"/>`,
		"fallback": "fluent:phone-screen-time-20-filled",
	});
}

export default Component;
