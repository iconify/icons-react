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
		"content": `<style>.vi26ue4fy {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm6.293 8.707l3 3a1 1 0 0 0 1.414 0l3-3a.999.999 0 1 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-1.293-1.293a.999.999 0 1 0-1.414 1.414");
}
</style><path class="vi26ue4fy"/>`,
		"fallback": "coolicons:square-arrow-down-fill",
	});
}

export default Component;
