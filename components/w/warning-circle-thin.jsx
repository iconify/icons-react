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
		"content": `<style>.ggpxsb5wi {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m-4-84V80a4 4 0 0 1 8 0v56a4 4 0 0 1-8 0m12 36a8 8 0 1 1-8-8a8 8 0 0 1 8 8");
}
</style><path class="ggpxsb5wi"/>`,
		"fallback": "ph:warning-circle-thin",
	});
}

export default Component;
