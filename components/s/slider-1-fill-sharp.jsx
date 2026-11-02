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
		"content": `<style>.f9dfygx3l {
  fill: currentColor;
  d: path("M3 10a1 1 0 0 1 0-2h10.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2h-2.171a3 3 0 0 1-5.658 0Zm0 6a1 1 0 0 1 0-2h2.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2H10.829a3 3 0 0 1-5.658 0Z");
}
</style><path class="f9dfygx3l"/>`,
		"fallback": "coolicons:slider-1-fill-sharp",
	});
}

export default Component;
