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
		"content": `<style>.h4dxubbrl {
  fill: currentColor;
  d: path("M20 17.175L7.4 4.6L10 2h8q.825 0 1.413.588T20 4zm.5 6.125L15.2 18l1.425-1.4L20 19.975V20q0 .825-.587 1.413T18 22H6q-.825 0-1.412-.587T4 20V8l.6-.6L.7 3.5l1.425-1.4L21.9 21.875z");
}
</style><path class="h4dxubbrl"/>`,
		"fallback": "material-symbols:no-sim",
	});
}

export default Component;
