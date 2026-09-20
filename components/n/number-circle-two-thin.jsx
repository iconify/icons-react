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
		"content": `<style>.h2bkq7bcu {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m22.36-99.15L112 172h40a4 4 0 0 1 0 8h-48a4 4 0 0 1-3.2-6.4L144 116a20 20 0 0 0-4-28a20 20 0 0 0-28 4a20 20 0 0 0-2.89 5.37a4 4 0 0 1-7.55-2.66a28.2 28.2 0 0 1 4-7.52a28 28 0 1 1 44.72 33.7Z");
}
</style><path class="h2bkq7bcu"/>`,
		"fallback": "ph:number-circle-two-thin",
	});
}

export default Component;
