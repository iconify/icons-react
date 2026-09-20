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
		"content": `<style>.gqwprfs6f {
  fill: currentColor;
  d: path("M5 17v-2h2v2zm9 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T20 13v2q0 .825-.587 1.413T18 17zm-5 0l2-8H7V7h4.25q.725 0 1.238.538T13 8.8l-.05.45L11 17z");
}
</style><path class="gqwprfs6f"/>`,
		"fallback": "material-symbols:speed-0-75",
	});
}

export default Component;
