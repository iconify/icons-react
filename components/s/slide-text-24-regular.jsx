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
		"content": `<style>.cbynfvb6h {
  fill: currentColor;
  d: path("M6.75 8a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM6 11.75a.75.75 0 0 1 .75-.75h8.5a.75.75 0 0 1 0 1.5h-8.5a.75.75 0 0 1-.75-.75M6.75 14a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5zm-2-10A2.75 2.75 0 0 0 2 6.75v10.5A2.75 2.75 0 0 0 4.75 20h14.5A2.75 2.75 0 0 0 22 17.25V6.75A2.75 2.75 0 0 0 19.25 4zM3.5 6.75c0-.69.56-1.25 1.25-1.25h14.5c.69 0 1.25.56 1.25 1.25v10.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25z");
}
</style><path class="cbynfvb6h"/>`,
		"fallback": "fluent:slide-text-24-regular",
	});
}

export default Component;
