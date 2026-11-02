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
		"content": `<style>.ag8vmcb-e {
  fill: currentColor;
  d: path("M9 5h6a7 7 0 1 1 0 14H9A7 7 0 1 1 9 5m-3.685 5.443a4 4 0 1 0 7.37 3.114a4 4 0 0 0-7.37-3.114");
}
</style><path class="ag8vmcb-e"/>`,
		"fallback": "coolicons:toggle-left-fill",
	});
}

export default Component;
