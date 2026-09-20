import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gy6598beq {
  fill: currentColor;
  d: path("M100 58H40a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h62v10a34 34 0 0 1-34 34a6 6 0 0 0 0 12a46.06 46.06 0 0 0 46-46V72a14 14 0 0 0-14-14m2 80H40a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2Zm114-80h-60a14 14 0 0 0-14 14v64a14 14 0 0 0 14 14h62v10a34 34 0 0 1-34 34a6 6 0 0 0 0 12a46.06 46.06 0 0 0 46-46V72a14 14 0 0 0-14-14m2 80h-62a2 2 0 0 1-2-2V72a2 2 0 0 1 2-2h60a2 2 0 0 1 2 2Z");
}
</style><path class="gy6598beq"/>`,
		"fallback": "ph:quotes-light",
	});
}

export default Component;
