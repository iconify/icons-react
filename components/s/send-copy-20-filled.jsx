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
		"content": `<style>.x9slvtt9j {
  fill: currentColor;
  d: path("M11.532 2.22a.75.75 0 0 0-1.06 0l-2.499 2.5a.75.75 0 0 0 1.06 1.06l1.22-1.22v6.69a.75.75 0 1 0 1.499 0V4.56l1.22 1.22a.75.75 0 1 0 1.06-1.06zm2.9 14.28a2 2 0 0 1-1.936 1.5H6.998A4.5 4.5 0 0 1 2.5 13.5v-2.25a.75.75 0 1 1 1.5 0v2.25a3 3 0 0 0 2.998 3zm1.069-7.75a.75.75 0 1 1 1.499 0v4.75a2 2 0 0 1-2 2H7.005a2 2 0 0 1-2-2V8.75a.75.75 0 1 1 1.5 0v4.75a.5.5 0 0 0 .5.5H15a.5.5 0 0 0 .5-.5z");
}
</style><path class="x9slvtt9j"/>`,
		"fallback": "fluent:send-copy-20-filled",
	});
}

export default Component;
