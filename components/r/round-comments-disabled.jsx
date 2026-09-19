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
		"content": `<style>.gwwp2scfr {
  fill: currentColor;
  d: path("M1.39 2.81a.996.996 0 0 0 0 1.41l.61.61V16c0 1.1.9 2 2 2h11.17l4.61 4.61a.996.996 0 1 0 1.41-1.41L2.81 2.81c-.39-.39-1.03-.39-1.42 0m4.99 6.4L8.17 11H7a1.003 1.003 0 0 1-.62-1.79M7 14c-.55 0-1-.45-1-1s.45-1 1-1h2.17l2 2zm7.83-2l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1h-5.17l-1-1H17c.55 0 1-.45 1-1s-.45-1-1-1H8.83l-4-4H20c1.1 0 2 .9 2 2v15.17L16.83 14H17c.55 0 1-.45 1-1s-.45-1-1-1z");
}
</style><path class="gwwp2scfr"/>`,
		"fallback": "ic:round-comments-disabled",
	});
}

export default Component;
