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
		"content": `<style>.a-wplf-uj {
  d: path("M16 21V9H7");
}

.gr-2bmw8s {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 21V9H7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wd2ghz3oy {
  d: path("M10 6 7 9l3 3");
}

.zsdu4_bkp {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M10 6 7 9l3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="gr-2bmw8s"/><path class="zsdu4_bkp"/><path class="a-wplf-uj"/><path class="wd2ghz3oy"/></g>`,
		"fallback": "iconmind:turn-left-duotone-regular",
	});
}

export default Component;
