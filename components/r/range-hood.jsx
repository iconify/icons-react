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
		"content": `<style>.m051d4b4t {
  fill: currentColor;
  d: path("M3.55 12.885h16.912L16 8.423V4H8v4.423zM4.616 19h14.769q.666 0 1.14-.475t.475-1.14v-3.5H3v3.5q0 .666.475 1.14t1.14.475M10 16.392v-.884h4v.884z");
}
</style><path class="m051d4b4t"/>`,
		"fallback": "material-symbols-light:range-hood",
	});
}

export default Component;
