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
		"content": `<style>.i3lva09ew {
  fill: currentColor;
  d: path("M5 17v-6h4V9H5V7h6v6H7v2h4v2zm7 0l3-5l-3-5h2l2 3.325L18 7h2l-3 5l3 5h-2l-2-3.325L14 17z");
}
</style><path class="i3lva09ew"/>`,
		"fallback": "material-symbols:speed-2x-sharp",
	});
}

export default Component;
