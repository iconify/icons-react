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
		"content": `<style>.cfrni87ym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m13.728 4.992l7 12C21.505 18.326 20.544 20 19 20H5c-1.544 0-2.505-1.674-1.728-3.008l7-12c.772-1.323 2.684-1.323 3.456 0M10 14h4");
}
</style><path class="cfrni87ym"/>`,
		"fallback": "coolicons:triangle-minus",
	});
}

export default Component;
