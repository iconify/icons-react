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
		"content": `<style>.x1uz9dbvl {
  fill: currentColor;
  d: path("M21.5 2A5.5 5.5 0 0 1 27 7.5v.75a.75.75 0 0 1-1.5 0V7.5a4 4 0 0 0-8 0V10h1.75A3.75 3.75 0 0 1 23 13.75v8.5A3.75 3.75 0 0 1 19.25 26H8.75A3.75 3.75 0 0 1 5 22.25v-8.5A3.75 3.75 0 0 1 8.75 10H16V7.5A5.5 5.5 0 0 1 21.5 2M14 16.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="x1uz9dbvl"/>`,
		"fallback": "fluent:lock-open-28-filled",
	});
}

export default Component;
