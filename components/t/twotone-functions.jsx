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
		"content": `<style>.cd3xp2y2d {
  fill: currentColor;
  d: path("M18 17h-7l5-5l-5-5h7V4H6v2l6.5 6L6 18v2h12z");
}
</style><path class="cd3xp2y2d"/>`,
		"fallback": "ic:twotone-functions",
	});
}

export default Component;
