import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.brrbxackc {
  fill: currentColor;
  d: path("M3 22V6h4q0-2.075 1.463-3.537T12 1t3.538 1.463T17 6h4v16zm2-2h14V8H5zm10.538-7.462Q17 11.075 17 9h-2q0 1.25-.875 2.125T12 12t-2.125-.875T9 9H7q0 2.075 1.463 3.538T12 14t3.538-1.463M9 6h6q0-1.25-.875-2.125T12 3t-2.125.875T9 6M5 20V8z");
}
</style><path class="brrbxackc"/>`,
		"fallback": "material-symbols:local-mall-outline-sharp",
	});
}

export default Component;
