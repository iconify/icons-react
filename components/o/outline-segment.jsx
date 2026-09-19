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
		"content": `<style>.gngncypfs {
  fill: currentColor;
  d: path("M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z");
}
</style><path class="gngncypfs"/>`,
		"fallback": "ic:outline-segment",
	});
}

export default Component;
