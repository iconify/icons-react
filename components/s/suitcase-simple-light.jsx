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
		"content": `<style>.plfr71b6s {
  fill: currentColor;
  d: path("M216 58h-42V48a22 22 0 0 0-22-22h-48a22 22 0 0 0-22 22v10H40a14 14 0 0 0-14 14v128a14 14 0 0 0 14 14h176a14 14 0 0 0 14-14V72a14 14 0 0 0-14-14M94 48a10 10 0 0 1 10-10h48a10 10 0 0 1 10 10v10H94ZM40 70h176a2 2 0 0 1 2 2v74H38V72a2 2 0 0 1 2-2m176 132H40a2 2 0 0 1-2-2v-42h180v42a2 2 0 0 1-2 2");
}
</style><path class="plfr71b6s"/>`,
		"fallback": "ph:suitcase-simple-light",
	});
}

export default Component;
