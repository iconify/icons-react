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
		"content": `<style>.lcgw33bfr {
  d: path("M16.2267 12.4699L8.28926 16.9316C7.93516 17.1306 7.5 16.8716 7.5 16.4617L7.5 7.5383C7.5 7.12844 7.93516 6.86937 8.28926 7.06842L16.2267 11.5301C16.5911 11.7349 16.5911 12.2651 16.2267 12.4699Z");
}

.lwaj0vjwi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lwaj0vjwi"/><path class="lcgw33bfr"/></g>`,
		"fallback": "keyline-icons:square-caret-right-duotone",
	});
}

export default Component;
