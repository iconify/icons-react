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
		"content": `<style>.hhkjexbou {
  d: path("M5 10c0 -3 3 -4 7 -4s7 1 7 4Z");
}

.hrfwthv5l {
  fill: currentColor;
  d: path("M5 16a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ia-flnb-l {
  fill: currentColor;
  d: path("M5 10c0 -3 3 -4 7 -4s7 1 7 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ljwrd-sbd {
  d: path("M5 16a3 3 0 0 1 3 -3h8a3 3 0 0 1 3 3 3 3 0 0 1 -3 3H8a3 3 0 0 1 -3 -3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="hrfwthv5l"/><path class="ia-flnb-l"/><path class="ljwrd-sbd"/><path class="hhkjexbou"/></g>`,
		"fallback": "iconmind:sushi-duotone-regular",
	});
}

export default Component;
