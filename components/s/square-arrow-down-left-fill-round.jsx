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
		"content": `<style>.iqsvpyspo {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm7 9h4a1 1 0 0 0 0-2h-1.586l4.293-4.293a.999.999 0 1 0-1.414-1.414L10 12.586V11a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1");
}
</style><path class="iqsvpyspo"/>`,
		"fallback": "coolicons:square-arrow-down-left-fill-round",
	});
}

export default Component;
