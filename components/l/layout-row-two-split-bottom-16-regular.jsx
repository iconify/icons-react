import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.dg08b1b6u {
  fill: currentColor;
  d: path("M2 4.5A2.5 2.5 0 0 1 4.5 2h7A2.5 2.5 0 0 1 14 4.5v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 11.5zM4.5 3A1.5 1.5 0 0 0 3 4.5v3h10v-3A1.5 1.5 0 0 0 11.5 3zM13 8.5H8.5V13h3a1.5 1.5 0 0 0 1.5-1.5zm-5.5 0H3v3A1.5 1.5 0 0 0 4.5 13h3z");
}
</style><path class="dg08b1b6u"/>`,
		"fallback": "fluent:layout-row-two-split-bottom-16-regular",
	});
}

export default Component;
