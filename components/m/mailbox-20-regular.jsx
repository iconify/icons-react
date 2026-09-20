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
		"content": `<style>.o70jarbrn {
  fill: currentColor;
  d: path("M3.5 2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H7v3H5.5A3.5 3.5 0 0 0 2 11.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.5A3.5 3.5 0 0 0 14.5 8H8V2.5a.5.5 0 0 0-.5-.5zM7 9v2.5a.5.5 0 0 0 1 0V9h4.05A3.5 3.5 0 0 0 11 11.5V17H3v-5.5A2.5 2.5 0 0 1 5.5 9zm10 2.5V17h-5v-5.5a2.5 2.5 0 0 1 5 0m-3-.5a.5.5 0 0 0 0 1h1a.5.5 0 0 0 0-1z");
}
</style><path class="o70jarbrn"/>`,
		"fallback": "fluent:mailbox-20-regular",
	});
}

export default Component;
