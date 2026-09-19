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
		"content": `<style>.ds85t8b9e {
  fill: currentColor;
  d: path("M15.61 7.41L14.2 6l-6 6l6 6l1.41-1.41L11.03 12z");
}
</style><path class="ds85t8b9e"/>`,
		"fallback": "ic:sharp-navigate-before",
	});
}

export default Component;
