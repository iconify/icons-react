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
		"content": `<style>.h-gmahbpw {
  fill: currentColor;
  d: path("M3.75 4a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5zm9.5 3.5a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zm-.75 7.75a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m.75-4.25a.75.75 0 0 0 0 1.5h7a.75.75 0 0 0 0-1.5zM3 18.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75M4.5 11a2.5 2.5 0 0 1 5 0v4.75a.75.75 0 0 0 1.5 0V11a4 4 0 1 0-8 0v4.75a.75.75 0 0 0 1.5 0z");
}
</style><path class="h-gmahbpw"/>`,
		"fallback": "fluent:text-position-square-left-24-regular",
	});
}

export default Component;
