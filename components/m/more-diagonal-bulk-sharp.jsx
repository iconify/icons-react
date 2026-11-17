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
		"content": `<style>.qo9oq7__u {
  fill: currentColor;
  d: path("M15.158 6.221a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-5 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558m-5 5a2 2 0 1 1 3.684 1.558a2 2 0 0 1-3.684-1.558");
}
</style><path class="qo9oq7__u"/>`,
		"fallback": "coolicons:more-diagonal-bulk-sharp",
	});
}

export default Component;
