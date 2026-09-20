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
		"content": `<style>.c3ea6nbda {
  fill: currentColor;
  d: path("m16.9 20.789l-.688-.689l2.1-2.1l-2.1-2.1l.688-.688l2.1 2.1l2.1-2.1l.688.688l-2.075 2.1l2.075 2.1l-.688.688l-2.1-2.075zM3 21L21 3v9.489q-.483-.189-.988-.28q-.506-.092-1.012-.092q-2.467 0-4.175 1.708T13.117 18q0 .766.212 1.56q.211.796.634 1.44z");
}
</style><path class="c3ea6nbda"/>`,
		"fallback": "material-symbols-light:signal-cellular-nodata-sharp",
	});
}

export default Component;
