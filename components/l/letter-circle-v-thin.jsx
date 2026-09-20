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
		"content": `<style>.oibocingk {
  fill: currentColor;
  d: path("M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m35.71-122.51l-32 80a4 4 0 0 1-7.42 0l-32-80a4 4 0 1 1 7.42-3L128 165.23l28.29-70.72a4 4 0 1 1 7.42 3Z");
}
</style><path class="oibocingk"/>`,
		"fallback": "ph:letter-circle-v-thin",
	});
}

export default Component;
