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
		"content": `<style>.nw_3rob0f {
  fill: currentColor;
  d: path("M16.5 2.75a.75.75 0 0 1 0 1.5h-13a.75.75 0 0 1 0-1.5zm-8.5 3a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5zm.75 3.75A.75.75 0 0 0 8 8.75H3.5a.75.75 0 0 0 0 1.5H8a.75.75 0 0 0 .75-.75M8 11.75a.75.75 0 0 1 0 1.5H3.5a.75.75 0 0 1 0-1.5zm9.25 3.75a.75.75 0 0 0-.75-.75h-13a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 .75-.75m-1.5-7a2.25 2.25 0 0 0-4.5 0v5a.75.75 0 0 1-1.5 0v-5a3.75 3.75 0 1 1 7.5 0v5a.75.75 0 0 1-1.5 0z");
}
</style><path class="nw_3rob0f"/>`,
		"fallback": "fluent:text-position-square-right-20-filled",
	});
}

export default Component;
