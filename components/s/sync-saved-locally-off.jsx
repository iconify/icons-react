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
		"content": `<style>.q_vakbbss {
  fill: currentColor;
  d: path("M20.5 23.3L18.2 21H1v-2h15.175l-1-1H4q-.825 0-1.412-.587T2 16V4.85L.7 3.5l1.4-1.4l19.8 19.8zm.2-5.45l-6.775-6.775L16.6 8.4l-1.425-1.425L12.5 9.65L5.85 3H20q.825 0 1.413.588T22 5v11q0 .65-.363 1.138t-.937.712");
}
</style><path class="q_vakbbss"/>`,
		"fallback": "material-symbols:sync-saved-locally-off",
	});
}

export default Component;
