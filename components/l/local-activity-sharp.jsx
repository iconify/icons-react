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
		"content": `<style>.qy36q20pt {
  fill: currentColor;
  d: path("M9.93 15L12 13.4l2.02 1.562l-.782-2.516l2.147-1.661H12.83L12 8.23l-.83 2.554H8.615l2.096 1.661zM3 19v-4.192q.883-.327 1.441-1.088Q5 12.96 5 12t-.559-1.72T3 9.192V5h18v4.192q-.883.327-1.441 1.088Q19 11.04 19 12t.559 1.72T21 14.808V19z");
}
</style><path class="qy36q20pt"/>`,
		"fallback": "material-symbols-light:local-activity-sharp",
	});
}

export default Component;
