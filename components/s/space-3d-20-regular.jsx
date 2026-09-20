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
		"content": `<style>.elw0lrg0x {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm13 0a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3h12zM4 11.992L5.138 10H4zm.862.508h2.76l.715-2.5H6.29zM4 13.5v.5a2 2 0 0 0 2 2h.623l.714-2.5zm4.377 0L7.663 16h4.674l-.714-2.5zm4.286 0l.714 2.5H14a2 2 0 0 0 2-2v-.5zm2.475-1L13.71 10h-2.047l.714 2.5zm-3.8 0l-.715-2.5H9.377l-.714 2.5zM16 11.992V10h-1.138z");
}
</style><path class="elw0lrg0x"/>`,
		"fallback": "fluent:space-3d-20-regular",
	});
}

export default Component;
