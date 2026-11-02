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
		"content": `<style>.zn8kvzbob {
  fill: currentColor;
  d: path("M16 2a1 1 0 0 1 1 1v2h3a1 1 0 0 1 0 2h-1v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7H4a1 1 0 0 1 0-2h3V3a1 1 0 0 1 1-1Zm-1 2H9v1h6Z");
}
</style><path class="zn8kvzbob"/>`,
		"fallback": "coolicons:trash-fill-sharp",
	});
}

export default Component;
