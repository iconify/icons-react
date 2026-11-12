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
		"content": `<style>.tng9kfbzx {
  fill: currentColor;
  d: path("M13 2h6a3 3 0 1 1 0 6h-6a3 3 0 1 1 0-6M8 13v6a3 3 0 1 1-6 0v-6a3 3 0 1 1 6 0m7 2v1.586l4.293-4.293a.999.999 0 1 1 1.414 1.414L16.414 18H18a1 1 0 0 1 0 2h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0");
}
</style><path class="tng9kfbzx"/>`,
		"fallback": "coolicons:table-transpose-fill-round",
	});
}

export default Component;
