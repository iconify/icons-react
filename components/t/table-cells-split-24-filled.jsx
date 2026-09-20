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
		"content": `<style>.lmz79jbdq {
  fill: currentColor;
  d: path("M6.25 3H11v4H3v-.75A3.25 3.25 0 0 1 6.25 3M21 7v-.75A3.25 3.25 0 0 0 17.75 3H12.5v4zm-8.5 14h5.25A3.25 3.25 0 0 0 21 17.75V17h-8.5zM3 8.5v7h18v-7zm9.5 1.5v4H11v-4zM3 17.75V17h8v4H6.25A3.25 3.25 0 0 1 3 17.75");
}
</style><path class="lmz79jbdq"/>`,
		"fallback": "fluent:table-cells-split-24-filled",
	});
}

export default Component;
