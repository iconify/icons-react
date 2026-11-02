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
		"content": `<style>.rz6l8ac5v {
  fill: currentColor;
  d: path("m6.664 5.504l6 4a2.998 2.998 0 0 1 0 4.992l-6 4A3 3 0 0 1 2 16V8a3 3 0 0 1 4.664-2.496M16 18V6a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0m4 0V6a1 1 0 0 1 2 0v12a1 1 0 0 1-2 0");
}
</style><path class="rz6l8ac5v"/>`,
		"fallback": "coolicons:play-pause-fill-round",
	});
}

export default Component;
