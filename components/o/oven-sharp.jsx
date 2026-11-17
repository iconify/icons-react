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
		"content": `<style>.uplc_tb4s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h16v18H4Zm4 3h.01M12 6h.01M16 6h.01M8 10h8m-8 3h8v5H8Z");
}
</style><path class="uplc_tb4s"/>`,
		"fallback": "coolicons:oven-sharp",
	});
}

export default Component;
