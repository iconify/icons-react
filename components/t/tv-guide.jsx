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
		"content": `<style>.lqgzw9bce {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm3-5h2v-6h1.75L14 16h2l3-8h-2.5L15 12.5L13.5 8H5v2h3z");
}
</style><path class="lqgzw9bce"/>`,
		"fallback": "material-symbols:tv-guide",
	});
}

export default Component;
