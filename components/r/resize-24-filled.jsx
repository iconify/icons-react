import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.tvg2-t0us {
  fill: currentColor;
  d: path("M10.25 3h-4A3.25 3.25 0 0 0 3 6.25v2a.75.75 0 0 0 1.5 0v-2c0-.966.784-1.75 1.75-1.75h4a.75.75 0 0 0 0-1.5m.5 18A3.25 3.25 0 0 0 14 17.75v-4.5A3.25 3.25 0 0 0 10.75 10h-4.5A3.25 3.25 0 0 0 3 13.25v4.5A3.25 3.25 0 0 0 6.25 21zm5 0a.75.75 0 0 1 0-1.5h2a1.75 1.75 0 0 0 1.75-1.75v-4a.75.75 0 0 1 1.5 0v4A3.25 3.25 0 0 1 17.75 21zM21 10.25v-4A3.25 3.25 0 0 0 17.75 3h-4a.75.75 0 0 0 0 1.5h4c.966 0 1.75.784 1.75 1.75v4a.75.75 0 0 0 1.5 0");
}
</style><path class="tvg2-t0us"/>`,
		"fallback": "fluent:resize-24-filled",
	});
}

export default Component;
