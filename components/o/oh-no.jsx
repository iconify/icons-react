import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.byngv_uhh {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M22.5 14A8.5 8.5 0 1 1 14 5.5a8.5 8.5 0 0 1 8.5 8.5Zm20 0A8.5 8.5 0 1 1 34 5.5a8.5 8.5 0 0 1 8.5 8.5Zm0 20a8.5 8.5 0 1 1-8.5-8.5a8.5 8.5 0 0 1 8.5 8.5Z");
}
</style><path class="byngv_uhh"/>`,
		"fallback": "arcticons:oh-no",
	});
}

export default Component;
