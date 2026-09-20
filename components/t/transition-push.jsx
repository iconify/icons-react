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
		"content": `<style>.pes08yb-h {
  fill: currentColor;
  d: path("M8 20v-1.975h2V6H8V4h2q.825 0 1.413.588T12 6v12q0 .825-.587 1.413T10 20zm8 0q-.825 0-1.412-.587T14 18V6q0-.825.588-1.412T16 4h5q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zM5 16l-1.425-1.4L5.15 13H1v-2h4.15L3.575 9.425L5 8l4 4z");
}
</style><path class="pes08yb-h"/>`,
		"fallback": "material-symbols:transition-push",
	});
}

export default Component;
