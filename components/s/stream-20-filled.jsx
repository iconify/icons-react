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
		"content": `<style>.rawecxb-r {
  fill: currentColor;
  d: path("M7.5 9.25a5.75 5.75 0 0 1 5.75-5.75h.5a.75.75 0 0 0 0-1.5h-.5A7.25 7.25 0 0 0 6 9.25v1a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 0 0 1.5h2.5a2.25 2.25 0 0 0 2.25-2.25zm6.25-3A3.25 3.25 0 0 0 10.5 9.5v1a4.75 4.75 0 0 1-4.75 4.75h-3a.75.75 0 0 1 0-1.5h3A3.25 3.25 0 0 0 9 10.5v-1a4.75 4.75 0 0 1 4.75-4.75h3.5a.75.75 0 0 1 0 1.5zm.5 2.75a.75.75 0 0 0-.75.75v1A7.25 7.25 0 0 1 6.25 18h-.5a.75.75 0 0 1 0-1.5h.5A5.75 5.75 0 0 0 12 10.75v-1a2.25 2.25 0 0 1 2.25-2.25h3a.75.75 0 0 1 0 1.5z");
}
</style><path class="rawecxb-r"/>`,
		"fallback": "fluent:stream-20-filled",
	});
}

export default Component;
