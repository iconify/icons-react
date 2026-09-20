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
		"content": `<style>.c-s4vwbss {
  fill: currentColor;
  d: path("M3 21V7h3.616V3H21v14.385h-4V21zm4.616-4.615H20V4H7.616z");
}
</style><path class="c-s4vwbss"/>`,
		"fallback": "material-symbols-light:shadow-sharp",
	});
}

export default Component;
