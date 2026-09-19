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
		"content": `<style>.oalacdfvx {
  fill: currentColor;
  d: path("M7.33 20H2V4h5.33zM22 20V4h-5.33v16zm-7.33 0V4H9.33v16z");
}
</style><path class="oalacdfvx"/>`,
		"fallback": "ic:sharp-view-week",
	});
}

export default Component;
