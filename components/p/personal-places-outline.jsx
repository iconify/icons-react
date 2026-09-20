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
		"content": `<style>.h1g0vyb8v {
  fill: currentColor;
  d: path("M7 19.5V5h8.558q.215 0 .39.105t.298.264L18.77 9l-2.523 3.63q-.123.16-.298.265t-.39.105H8v6.5zM8 12h7.5l2-3l-2-3H8zm0 0V6z");
}
</style><path class="h1g0vyb8v"/>`,
		"fallback": "material-symbols-light:personal-places-outline",
	});
}

export default Component;
