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
		"content": `<style>.pp0v0nb_u {
  fill: currentColor;
  d: path("M8 16h2v-6h1.75L14 16h2l3-8h-2.5L15 12.5L13.5 8H5v2h3zm-3 5q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zM5 5v14z");
}
</style><path class="pp0v0nb_u"/>`,
		"fallback": "material-symbols:tv-guide-outline",
	});
}

export default Component;
