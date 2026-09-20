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
		"content": `<style>.m5gokybin {
  fill: currentColor;
  d: path("M4 21V3h16v18zm2-2h12V5H6zm5-6.825L9.4 10.6L8 12l4 4l4-4l-1.4-1.425l-1.6 1.6V8h-2zM18 19H6z");
}
</style><path class="m5gokybin"/>`,
		"fallback": "material-symbols:tilt-arrow-down-outline-sharp",
	});
}

export default Component;
