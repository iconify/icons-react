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
		"content": `<style>.wevrq9fvy {
  fill: currentColor;
  d: path("M3 21V3h18v18zm6.075-4.75L12 14.475l2.925 1.775l-.775-3.325l2.6-2.25l-3.425-.275L12 7.25l-1.325 3.15l-3.425.275l2.6 2.25z");
}
</style><path class="wevrq9fvy"/>`,
		"fallback": "material-symbols:pages-sharp",
	});
}

export default Component;
