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
		"content": `<style>.ue5tjrbhd {
  fill: currentColor;
  d: path("M3 21V3h18v18zM5 5v9l4.5-4.525l4 4L19 7.3V5zm0 14h14v-8.7l-5.5 6.175l-4-4L5 17z");
}
</style><path class="ue5tjrbhd"/>`,
		"fallback": "material-symbols:sound-detection-glass-break-outline",
	});
}

export default Component;
