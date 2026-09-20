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
		"content": `<style>.x5de6wbwc {
  fill: currentColor;
  d: path("M235.92 199a8 8 0 0 1-10.92-3.08L155.32 72H136v8a8 8 0 0 1-16 0v-8h-19.32L31 195.92a8 8 0 0 1-14-7.84L82.32 72H24a8 8 0 0 1 0-16h208a8 8 0 0 1 0 16h-58.32L239 188.08a8 8 0 0 1-3.08 10.92M128 112a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8m0 56a8 8 0 0 0-8 8v16a8 8 0 0 0 16 0v-16a8 8 0 0 0-8-8");
}
</style><path class="x5de6wbwc"/>`,
		"fallback": "ph:road-horizon",
	});
}

export default Component;
