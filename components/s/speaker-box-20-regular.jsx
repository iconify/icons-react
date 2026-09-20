import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mcrm3kbna {
  fill: currentColor;
  d: path("M4 5a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm3 7a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-3 2a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2");
}
</style><path class="mcrm3kbna"/>`,
		"fallback": "fluent:speaker-box-20-regular",
	});
}

export default Component;
