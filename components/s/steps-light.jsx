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
		"content": `<style>.qo6v21mtq {
  fill: currentColor;
  d: path("M246 56a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6h-50v42a6 6 0 0 1-6 6H78v42a6 6 0 0 1-6 6H16a6 6 0 0 1 0-12h50v-42a6 6 0 0 1 6-6h50v-42a6 6 0 0 1 6-6h50V56a6 6 0 0 1 6-6h56a6 6 0 0 1 6 6");
}
</style><path class="qo6v21mtq"/>`,
		"fallback": "ph:steps-light",
	});
}

export default Component;
