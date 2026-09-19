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
		"content": `<style>.isod86bcn {
  fill: currentColor;
  d: path("M9 17H7v-7h2zm4 0h-2V7h2zm4 0h-2v-4h2zm2 2H5V5h14zm2-16H3v18h18z");
}
</style><path class="isod86bcn"/>`,
		"fallback": "ic:sharp-insert-chart-outlined",
	});
}

export default Component;
