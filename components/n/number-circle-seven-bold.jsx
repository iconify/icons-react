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
		"content": `<style>.ya7l4vbuh {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m33.83-130.88a12 12 0 0 1 1.45 11l-32 88a12 12 0 0 1-22.56-8.2L134.87 100H104a12 12 0 0 1 0-24h48a12 12 0 0 1 9.83 5.12");
}
</style><path class="ya7l4vbuh"/>`,
		"fallback": "ph:number-circle-seven-bold",
	});
}

export default Component;
