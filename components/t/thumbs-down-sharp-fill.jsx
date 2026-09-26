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
		"content": `<style>.yl6u6_7vh {
  fill: currentColor;
  d: path("M22 15L16.7808 15L14.9701 22.2425C14.8589 22.6877 14.4589 23 14 23L9 23C8.4957 23 8.0703 22.6245 8.0077 22.124L7.1172 15L2 15C1.4477 15 1 14.5523 1 14C1 13.8801 1.0216 13.7612 1.0637 13.6489L5.5637 1.6489C5.71 1.2586 6.0832 1 6.5 1L22 1C22.5523 1 23 1.4477 23 2L23 14C23 14.5523 22.5523 15 22 15ZM21 13L21 3L17 3L17 13L21 13Z");
}
</style><path class="yl6u6_7vh"/>`,
		"fallback": "keyline-icons:thumbs-down-sharp-fill",
	});
}

export default Component;
