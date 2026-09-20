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
		"content": `<style>.iai51hbex {
  fill: currentColor;
  d: path("M20.7 17.85L18.85 16H20V5H7.85l-2-2H20q.825 0 1.413.588T22 5v11q0 .65-.363 1.138t-.937.712m-.2 5.45L18.2 21H1v-2h15.175l-1-1H4q-.825 0-1.412-.587T2 16V4.85L.7 3.5l1.4-1.4l19.8 19.8zM13.15 16L4 6.825V16zm-.65-6.35l2.675-2.675L16.6 8.4l-2.675 2.675z");
}
</style><path class="iai51hbex"/>`,
		"fallback": "material-symbols:sync-saved-locally-off-outline",
	});
}

export default Component;
