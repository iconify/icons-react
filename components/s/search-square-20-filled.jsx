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
		"content": `<style>.kyntp_b8x {
  fill: currentColor;
  d: path("M9 11.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm6 6.5c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 9 12.5");
}
</style><path class="kyntp_b8x"/>`,
		"fallback": "fluent:search-square-20-filled",
	});
}

export default Component;
