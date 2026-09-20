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
		"content": `<style>.sgnfijb4j {
  fill: currentColor;
  d: path("M8 12v-2h8v2zm0-4V6h8v2zm-2 6h7.5q.725 0 1.35.313t1.05.887l2.1 2.75V4H6zm0 6h11.05l-2.725-3.575q-.15-.2-.362-.312T13.5 16H6zm12 2H6q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22M6 20V4zm0-4v-2z");
}
</style><path class="sgnfijb4j"/>`,
		"fallback": "material-symbols:lab-profile-outline",
	});
}

export default Component;
