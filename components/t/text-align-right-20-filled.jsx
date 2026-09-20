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
		"content": `<style>.ntio_lqqm {
  fill: currentColor;
  d: path("M6 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H6.75A.75.75 0 0 1 6 4.25m-4 5a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 9.25m7.75 4.25a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="ntio_lqqm"/>`,
		"fallback": "fluent:text-align-right-20-filled",
	});
}

export default Component;
