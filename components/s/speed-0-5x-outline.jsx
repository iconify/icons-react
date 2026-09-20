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
		"content": `<style>.xd5mz9b3d {
  fill: currentColor;
  d: path("M3 17v-2h2v2zm10 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-7 0v-2h4v-2H6V7h6v2H8v2h2q.825 0 1.413.588T12 13v2q0 .825-.587 1.413T10 17z");
}
</style><path class="xd5mz9b3d"/>`,
		"fallback": "material-symbols:speed-0-5x-outline",
	});
}

export default Component;
