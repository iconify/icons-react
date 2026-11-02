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
		"content": `<style>.y0vgaj6-n {
  fill: currentColor;
  d: path("M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3m-8-2h8a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-8Z");
}
</style><path class="y0vgaj6-n"/>`,
		"fallback": "coolicons:panel-left-fill",
	});
}

export default Component;
