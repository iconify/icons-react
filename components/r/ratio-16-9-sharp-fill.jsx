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
		"content": `<style>.xs39yhw4q {
  fill: currentColor;
  d: path("M2 5L22 5C22.5523 5 23 5.4477 23 6L23 18C23 18.5523 22.5523 19 22 19L2 19C1.4477 19 1 18.5523 1 18L1 6C1 5.4477 1.4477 5 2 5Z");
}
</style><path class="xs39yhw4q"/>`,
		"fallback": "keyline-icons:ratio-16-9-sharp-fill",
	});
}

export default Component;
