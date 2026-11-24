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
		"content": `<style>.bngo-yb3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 21h18M5 21V3h14v18m-9 0v-4h4v4M12 6h3v2.625c0 2.063-1.312 3.375-3 4.125c-1.687-.75-3-2.062-3-4.125V6z");
}
</style><path class="bngo-yb3c"/>`,
		"fallback": "coolicons:police-station-alt-sharp",
	});
}

export default Component;
