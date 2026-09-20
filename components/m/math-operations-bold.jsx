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
		"content": `<style>.r3r5deb6x {
  fill: currentColor;
  d: path("M116 72a12 12 0 0 1-12 12H40a12 12 0 0 1 0-24h64a12 12 0 0 1 12 12m-12 100H84v-20a12 12 0 0 0-24 0v20H40a12 12 0 0 0 0 24h20v20a12 12 0 0 0 24 0v-20h20a12 12 0 0 0 0-24m48 4h64a12 12 0 0 0 0-24h-64a12 12 0 0 0 0 24m64 16h-64a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24m-64.49-87.51a12 12 0 0 0 17 0L184 89l15.51 15.52a12 12 0 0 0 17-17L201 72l15.52-15.51a12 12 0 0 0-17-17L184 55l-15.51-15.49a12 12 0 0 0-17 17L167 72l-15.49 15.51a12 12 0 0 0 0 16.98");
}
</style><path class="r3r5deb6x"/>`,
		"fallback": "ph:math-operations-bold",
	});
}

export default Component;
