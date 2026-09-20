import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.x3vy8m3ek {
  fill: currentColor;
  d: path("M14 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793c2.167 1.38 5.097 2.201 8.283 2.207a4.5 4.5 0 0 1-.468-2v-8c0-.718.168-1.398.468-2zM18 17a3 3 0 0 0-3 3v.198l8 4.444l8-4.444V20a3 3 0 0 0-3-3zm13 4.913l-7.636 4.243a.75.75 0 0 1-.728 0L15 21.914V28a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z");
}
</style><path class="x3vy8m3ek"/>`,
		"fallback": "fluent:person-mail-32-filled",
	});
}

export default Component;
