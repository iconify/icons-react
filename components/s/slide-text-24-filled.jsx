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
		"content": `<style>.f8u50bc_y {
  fill: currentColor;
  d: path("M2 6.75A2.75 2.75 0 0 1 4.75 4h14.5A2.75 2.75 0 0 1 22 6.75v10.5A2.75 2.75 0 0 1 19.25 20H4.75A2.75 2.75 0 0 1 2 17.25zM6.75 8a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zm0 3a.75.75 0 0 0 0 1.5h8.5a.75.75 0 0 0 0-1.5zM6 14.75c0 .414.336.75.75.75h6.5a.75.75 0 0 0 0-1.5h-6.5a.75.75 0 0 0-.75.75");
}
</style><path class="f8u50bc_y"/>`,
		"fallback": "fluent:slide-text-24-filled",
	});
}

export default Component;
