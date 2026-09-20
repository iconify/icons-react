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
		"content": `<style>.kt80416qa {
  fill: currentColor;
  d: path("M1 3h22l-2.9 5H3.9zm4.05 7h13.9l-1.75 3H6.8zm2.9 5h8.1L12 22z");
}
</style><path class="kt80416qa"/>`,
		"fallback": "material-symbols:tornado",
	});
}

export default Component;
