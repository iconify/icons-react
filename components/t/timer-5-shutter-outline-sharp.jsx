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
		"content": `<style>.kiyyuwygu {
  fill: currentColor;
  d: path("M8 19v-3h6v-2.5H8V5h9v3h-6v2.5h6V19z");
}
</style><path class="kiyyuwygu"/>`,
		"fallback": "material-symbols:timer-5-shutter-outline-sharp",
	});
}

export default Component;
