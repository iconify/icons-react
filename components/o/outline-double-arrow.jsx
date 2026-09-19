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
		"content": `<style>.h6i3--k-y {
  fill: currentColor;
  d: path("M8.5 5H4l5 7l-5 7h4.5l5-7z");
}

.yw6235bcd {
  fill: currentColor;
  d: path("M15.5 5H11l5 7l-5 7h4.5l5-7z");
}
</style><path class="yw6235bcd"/><path class="h6i3--k-y"/>`,
		"fallback": "ic:outline-double-arrow",
	});
}

export default Component;
