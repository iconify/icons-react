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
		"content": `<style>.la19sgb-f {
  fill: currentColor;
  d: path("M3 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5V15a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM4 13v2a1 1 0 0 0 1 1h2v-3zm8 3v-3H8v3zm1 0h2a1 1 0 0 0 1-1v-2h-3zm0-4h3V9h-3zm-1-3H8v3h4zM4 9v3h3V9z");
}
</style><path class="la19sgb-f"/>`,
		"fallback": "fluent:table-stack-above-20-regular",
	});
}

export default Component;
