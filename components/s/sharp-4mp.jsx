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
		"content": `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.vqeuqpbcs {
  fill: currentColor;
  d: path("M3 3v18h18V3zm9.5 15.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zm-3-8.5V5.5H11v3h1.5v-3H14v3h1V10h-1v1.5h-1.5V10zm8.5 7h-3v1.5h-1.5v-6H18z");
}
</style><path class="k4n51fjcs"/><path class="vqeuqpbcs"/>`,
		"fallback": "ic:sharp-4mp",
	});
}

export default Component;
