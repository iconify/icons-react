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
		"content": `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.gtd2zk8su {
  d: path("M9 10L10 3L16 3L15 10M19 14L19 22M15 18L23 18");
}

.uom-dabvz {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M13 22L5 22C4.549 22 4.1539 21.6982 4.0352 21.2631L1.0353 10.2631C1.0119 10.1774 1 10.0889 1 10C1 9.4477 1.4478 9 2.0001 9L21.9999 9C22.5522 9 22.9999 9.4477 22.9999 10C22.9999 10.0889 22.9881 10.1774 22.9647 10.2631L22.491 12L13 12L13 22Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="gtd2zk8su"/><path clip-rule="evenodd" class="uom-dabvz"/></g>`,
		"fallback": "keyline-icons:shopping-basket-plus-sharp-fill",
	});
}

export default Component;
