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
		"content": `<style>.yf4bm3csm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m35.644 4.5l-6.547 31.05m-8.511 7.95l2.993-26.935M12.356 24.14l1.871 11.036");
}
</style><path class="yf4bm3csm"/>`,
		"fallback": "arcticons:sd-worx",
	});
}

export default Component;
