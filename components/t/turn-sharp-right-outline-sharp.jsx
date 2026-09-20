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
		"content": `<style>.qg4llmb_d {
  fill: currentColor;
  d: path("M6 21v-8h10V6.8l-1.6 1.6L13 7l4-4l4 4l-1.4 1.4L18 6.8V15H8v6z");
}
</style><path class="qg4llmb_d"/>`,
		"fallback": "material-symbols:turn-sharp-right-outline-sharp",
	});
}

export default Component;
