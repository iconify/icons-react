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
		"content": `<style>.mz99b9bxz {
  fill: currentColor;
  d: path("M8 20q-2.925 0-4.962-2.037T1 13q0-2.675 1.763-4.663T7.175 6.05L5.6 4.4L7 3l4 4l-4 4l-1.4-1.425L7.075 8.1Q5.3 8.45 4.15 9.825T3 13q0 2.075 1.462 3.538T8 18h3v2zm5-9V4h9v7zm0 9v-7h9v7zm2-2h5v-3h-5z");
}
</style><path class="mz99b9bxz"/>`,
		"fallback": "material-symbols:move-up-outline",
	});
}

export default Component;
