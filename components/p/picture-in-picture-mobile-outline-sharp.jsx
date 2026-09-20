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
		"content": `<style>.pc32ukbhp {
  fill: currentColor;
  d: path("M20 22H4V2h16zm-2-2V4H6v16zm0-16H6zm-1 9V5h-6v8zm-2-2h-2V7h2z");
}
</style><path class="pc32ukbhp"/>`,
		"fallback": "material-symbols:picture-in-picture-mobile-outline-sharp",
	});
}

export default Component;
