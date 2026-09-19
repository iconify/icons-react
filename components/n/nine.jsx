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
		"content": `<style>.qzree0jcg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.49 21.49 0 0 0 7.86 38.19l-4.95 5a1.38 1.38 0 0 0 1 2.36H24a21.5 21.5 0 0 0 0-43Zm0 34.2A12.53 12.53 0 0 1 11.64 24A12.53 12.53 0 0 1 24 11.3A12.53 12.53 0 0 1 36.36 24A12.53 12.53 0 0 1 24 36.7");
}
</style><path class="qzree0jcg"/>`,
		"fallback": "arcticons:nine",
	});
}

export default Component;
