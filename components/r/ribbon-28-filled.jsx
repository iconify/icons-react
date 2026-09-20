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
		"content": `<style>.rsbn2obrk {
  fill: currentColor;
  d: path("M20 25.25a.75.75 0 0 1-1.166.624L14 22.651l-4.834 3.223A.75.75 0 0 1 8 25.25v-7.386A9.46 9.46 0 0 0 14 20a9.46 9.46 0 0 0 6-2.136zM14 2a8.5 8.5 0 1 1 0 17a8.5 8.5 0 0 1 0-17");
}
</style><path class="rsbn2obrk"/>`,
		"fallback": "fluent:ribbon-28-filled",
	});
}

export default Component;
