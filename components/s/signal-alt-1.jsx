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
		"content": `<style>.d4wtpmbet {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.933 2.528c-11.858.02-21.454 9.65-21.433 21.509a21.47 21.47 0 0 0 3.33 11.448l-1.65 7.108a1 1 0 0 0 1.197 1.201l7.18-1.644c10.025 6.334 23.287 3.343 29.621-6.682c6.335-10.025 3.343-23.287-6.682-29.62a21.47 21.47 0 0 0-11.562-3.32Z");
}
</style><path class="d4wtpmbet"/>`,
		"fallback": "arcticons:signal-alt-1",
	});
}

export default Component;
