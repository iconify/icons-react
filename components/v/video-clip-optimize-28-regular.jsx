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
		"content": `<style>.aqce1fj7o {
  fill: currentColor;
  d: path("M3.5 7.75A4.25 4.25 0 0 1 7.75 3.5h1a.75.75 0 0 0 0-1.5h-1A5.75 5.75 0 0 0 2 7.75v1a.75.75 0 0 0 1.5 0zm0 12.5a4.25 4.25 0 0 0 4.25 4.25h1a.75.75 0 0 1 0 1.5h-1A5.75 5.75 0 0 1 2 20.25v-1a.75.75 0 0 1 1.5 0zM20.25 3.5a4.25 4.25 0 0 1 4.25 4.25v1a.75.75 0 0 0 1.5 0v-1A5.75 5.75 0 0 0 20.25 2h-1a.75.75 0 0 0 0 1.5zm4.25 16.75a4.25 4.25 0 0 1-4.25 4.25h-1a.75.75 0 0 0 0 1.5h1A5.75 5.75 0 0 0 26 20.25v-1a.75.75 0 0 0-1.5 0zm-14.25-9.999v7.5a1 1 0 0 0 1.472.881l7-3.75a1 1 0 0 0 0-1.762l-7-3.75a1 1 0 0 0-1.472.881M8.754 5a3.75 3.75 0 0 0-3.75 3.75v10.5A3.75 3.75 0 0 0 8.754 23H19.25A3.75 3.75 0 0 0 23 19.25V8.75A3.75 3.75 0 0 0 19.25 5zm-2.25 3.75a2.25 2.25 0 0 1 2.25-2.25H19.25a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25H8.753a2.25 2.25 0 0 1-2.25-2.25z");
}
</style><path class="aqce1fj7o"/>`,
		"fallback": "fluent:video-clip-optimize-28-regular",
	});
}

export default Component;
