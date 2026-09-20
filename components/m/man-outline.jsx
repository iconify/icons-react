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
		"content": `<style>.sq1l-qb9v {
  fill: currentColor;
  d: path("M10 22v-7H8V9q0-.825.588-1.412T10 7h4q.825 0 1.413.588T16 9v6h-2v7zm2-16q-.825 0-1.412-.587T10 4t.588-1.412T12 2t1.413.588T14 4t-.587 1.413T12 6");
}
</style><path class="sq1l-qb9v"/>`,
		"fallback": "material-symbols:man-outline",
	});
}

export default Component;
