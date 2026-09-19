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
		"content": `<style>.v3gdhkbui {
  fill: currentColor;
  d: path("M16 9h1.5l-1.75 6h-1.5L12.5 9H14l1 3.43zM5.14 13L6 15H4.5l-.85-2H2.5v2H1V9h5v4zm-.64-2.5h-2v1h2zM23 13h-3.5v2H18V9h5zm-1.5-2.5h-2v1h2zM11.5 9v1.5h-3v.75h3V15H7v-1.5h3v-.75H7V9z");
}
</style><path class="v3gdhkbui"/>`,
		"fallback": "ic:sharp-rsvp",
	});
}

export default Component;
