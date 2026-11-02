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
		"content": `<style>.gfbunacni {
  fill: currentColor;
  d: path("M7 3h5a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 16h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H8Z");
}
</style><path class="gfbunacni"/>`,
		"fallback": "coolicons:letter-d-fill-round",
	});
}

export default Component;
