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
		"content": `<style>.ymn4w9rvr {
  fill: currentColor;
  d: path("M5 21q-.825 0-1.412-.587T3 19V5.825L.675 3.5L2.1 2.075l19.8 19.8l-1.425 1.425l-2.3-2.3zM7 9.825V17h7.175l-2-2H9v-3.175zM15 9v3.15l-2-2V9zm6-4v13.15l-4-4V7h-4q-.65 0-1.15.35t-.725.925L5.85 3H19q.825 0 1.413.588T21 5");
}
</style><path class="ymn4w9rvr"/>`,
		"fallback": "material-symbols:nfc-off",
	});
}

export default Component;
