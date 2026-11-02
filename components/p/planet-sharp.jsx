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
		"content": `<style>.dx-xs2vof {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 13a7.071 7.071 0 1 1 14-2a7.071 7.071 0 0 1-14 2m0 0c-3.261 2.977-2.339 4.823 2 4c3.87-.734 9.091-3.344 12-6c3.261-2.977 2.339-4.823-2-4");
}
</style><path class="dx-xs2vof"/>`,
		"fallback": "coolicons:planet-sharp",
	});
}

export default Component;
