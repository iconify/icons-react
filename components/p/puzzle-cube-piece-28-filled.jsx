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
		"content": `<style>.ua622wlav {
  fill: currentColor;
  d: path("M8.5 25H6.75A3.75 3.75 0 0 1 3 21.25V19.5h5.5zm7.5 0h-6v-5.5h6zm7-3.75A3.75 3.75 0 0 1 19.25 25H17.5v-5.5H23zM8.5 18H3v-6h5.5zm7.5 0h-6v-6h6zm7 0h-5.5v-6H23zM8.5 10.5H3V8.75A3.75 3.75 0 0 1 6.75 5H8.5zm7.5 0h-6V5h6zm6.115-9.384a1.25 1.25 0 0 1 1.768 0l2.999 2.998a1.25 1.25 0 0 1 0 1.768l-3 2.999a1.25 1.25 0 0 1-1.767 0l-2.999-2.998a1.25 1.25 0 0 1 0-1.768z");
}
</style><path class="ua622wlav"/>`,
		"fallback": "fluent:puzzle-cube-piece-28-filled",
	});
}

export default Component;
