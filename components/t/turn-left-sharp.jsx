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
		"content": `<style>.ys12mhbrl {
  fill: currentColor;
  d: path("M15.52 19v-8.5H5.915l2.1 2.1l-.708.708L4 10l3.308-3.308l.708.708l-2.1 2.1h10.603V19z");
}
</style><path class="ys12mhbrl"/>`,
		"fallback": "material-symbols-light:turn-left-sharp",
	});
}

export default Component;
