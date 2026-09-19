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
		"content": `<style>.jjmuvjc4o {
  fill: currentColor;
  d: path("m21 18l-3-3v2H5v2h13v2zM9.5 11.8h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1zM12 4.98L13.87 10h-3.74z");
}
</style><path class="jjmuvjc4o"/>`,
		"fallback": "ic:sharp-text-rotation-none",
	});
}

export default Component;
