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
		"content": `<style>.mt3wtssut {
  fill: currentColor;
  d: path("M11.477 11.109L18.586 4H15a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V5.414l-7.109 7.109a6 6 0 1 1-1.414-1.414");
}
</style><path class="mt3wtssut"/>`,
		"fallback": "coolicons:mars-fill",
	});
}

export default Component;
