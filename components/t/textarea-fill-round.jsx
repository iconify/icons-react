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
		"content": `<style>.gwjgb0bdc {
  fill: currentColor;
  d: path("M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m9 3H6a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-6 4H6a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m8.293 3.293l-6 6a.999.999 0 1 0 1.414 1.414l6-6a.999.999 0 1 0-1.414-1.414m.414 7.414l1-1a.999.999 0 1 0-1.414-1.414l-1 1a.999.999 0 1 0 1.414 1.414");
}
</style><path class="gwjgb0bdc"/>`,
		"fallback": "coolicons:textarea-fill-round",
	});
}

export default Component;
