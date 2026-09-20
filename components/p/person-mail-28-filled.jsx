import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.hkv7djbbq {
  fill: currentColor;
  d: path("M13.17 26a3 3 0 0 1-.17-1v-7c0-.768.289-1.47.764-2H6a3 3 0 0 0-3 3v.715C3 23.433 7.21 26 13 26zM19 8A6 6 0 1 0 7 8a6 6 0 0 0 12 0m-2.5 8a2.5 2.5 0 0 0-2.5 2.5v.191l6.5 3.25l6.5-3.25V18.5a2.5 2.5 0 0 0-2.5-2.5zM27 19.809l-6.276 3.138a.5.5 0 0 1-.448 0L14 19.81v4.69a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5z");
}
</style><path class="hkv7djbbq"/>`,
		"fallback": "fluent:person-mail-28-filled",
	});
}

export default Component;
