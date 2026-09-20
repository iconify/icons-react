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
		"content": `<style>.vqhjvcjvu {
  fill: currentColor;
  d: path("M2 20V4h20v16zm4.375-2H20V6h-4.325L18 15z");
}
</style><path class="vqhjvcjvu"/>`,
		"fallback": "material-symbols:transition-chop-sharp",
	});
}

export default Component;
