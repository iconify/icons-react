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
		"content": `<style>.iglss1bsh {
  fill: currentColor;
  d: path("M5 18V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1");
}
</style><path class="iglss1bsh"/>`,
		"fallback": "coolicons:square-medium-fill-sharp",
	});
}

export default Component;
