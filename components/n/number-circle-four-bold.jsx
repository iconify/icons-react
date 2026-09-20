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
		"content": `<style>.by5e2zblc {
  fill: currentColor;
  d: path("M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m32-72h-4V80a12 12 0 0 0-21.47-7.37l-56 72A12 12 0 0 0 88 164h44v12a12 12 0 0 0 24 0v-12h4a12 12 0 0 0 0-24m-28 0h-19.46L132 115Z");
}
</style><path class="by5e2zblc"/>`,
		"fallback": "ph:number-circle-four-bold",
	});
}

export default Component;
