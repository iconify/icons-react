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
		"content": `<style>.coegjzc6x {
  fill: currentColor;
  d: path("M20.25 2A3.75 3.75 0 0 1 24 5.75v16.5A3.75 3.75 0 0 1 20.25 26H7.75A3.75 3.75 0 0 1 4 22.25V5.75A3.75 3.75 0 0 1 7.75 2zm-6.955 8.23A1.5 1.5 0 0 0 11 11.5v4.998a1.5 1.5 0 0 0 2.295 1.273l4-2.5a1.5 1.5 0 0 0 0-2.545z");
}
</style><path class="coegjzc6x"/>`,
		"fallback": "fluent:video-short-28-filled",
	});
}

export default Component;
