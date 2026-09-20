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
		"content": `<style>.as-5r8eit {
  fill: currentColor;
  d: path("M10 22v-5H8v-7q0-1.25.875-2.125T11 7t2.125.875T14 10q.9.375 1.45 1.2T16 13v4h-3v5zM9.587 5.412Q9 4.825 9 4t.588-1.412T11 2t1.413.588T13 4t-.587 1.413T11 6t-1.412-.587");
}
</style><path class="as-5r8eit"/>`,
		"fallback": "material-symbols:pregnant-woman-outline",
	});
}

export default Component;
