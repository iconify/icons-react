import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.y0f48lb4m {
  fill: currentColor;
  d: path("M15.293 6.293A1 1 0 0 1 17 7v13a1 1 0 1 1-2 0V9.414l-4.793 4.793a1 1 0 0 1-1.414 0L4 9.414V20a1 1 0 1 1-2 0V7a1 1 0 0 1 1.707-.707L9.5 12.086zM23 6a1 1 0 0 1 1 1v10.586l1.293-1.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 1 1 1.414-1.414L22 17.586V7a1 1 0 0 1 1-1");
}
</style><path class="y0f48lb4m"/>`,
		"fallback": "fluent:markdown-28-filled",
	});
}

export default Component;
