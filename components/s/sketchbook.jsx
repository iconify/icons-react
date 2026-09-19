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
		"content": `<style>.nlkxk3_po {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.5 44.5V18.526L24 3.5l-7.5 15.026V44.5zM21.578 8.353h4.836");
}

.w4cbnfkfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.501 18.866a3.1 3.1 0 0 0-1.355-.313a3.386 3.386 0 0 0-3.272 3.49c0-1.928-1.287-3.49-2.873-3.49s-2.873 1.562-2.873 3.49a3.386 3.386 0 0 0-3.272-3.49a3.1 3.1 0 0 0-1.274.274m4.546 3.216V44.5m5.746-22.457V44.5");
}
</style><path class="nlkxk3_po"/><path class="w4cbnfkfg"/>`,
		"fallback": "arcticons:sketchbook",
	});
}

export default Component;
