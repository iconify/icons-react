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
		"content": `<style>.jkq05rbht {
  fill: currentColor;
  d: path("M15.171 7H9a2 2 0 1 0 0 4h6a4 4 0 0 1 0 8H8.829a3 3 0 1 1 0-2H15a2 2 0 1 0 0-4H9a4 4 0 0 1 0-8h6.171a3 3 0 1 1 0 2");
}
</style><path class="jkq05rbht"/>`,
		"fallback": "coolicons:route-fill-round",
	});
}

export default Component;
