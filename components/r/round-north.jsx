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
		"content": `<style>.h5m944ibi {
  fill: currentColor;
  d: path("M5.71 9.7c.39.39 1.02.39 1.41 0L11 5.83V21c0 .55.45 1 1 1s1-.45 1-1V5.83l3.88 3.88a.996.996 0 1 0 1.41-1.41L12.7 2.7a.996.996 0 0 0-1.41 0L5.71 8.29a.996.996 0 0 0 0 1.41");
}
</style><path class="h5m944ibi"/>`,
		"fallback": "ic:round-north",
	});
}

export default Component;
