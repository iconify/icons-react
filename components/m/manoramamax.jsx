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
		"content": `<style>.m0f6ygben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.75 24L5.5 40.67V7.33h37v33.34L33.25 24L24 40.67L5.5 7.33");
}
</style><path class="m0f6ygben"/>`,
		"fallback": "arcticons:manoramamax",
	});
}

export default Component;
