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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.id4vqxf8c {
  d: path("m4 14 5 -5h11");
}

.ooo8twz0m {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 14 5 -5h11");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qlw91sbif {
  d: path("m4 19 5 -5h4l4 4");
}

.tu2_m5dvw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m4 19 5 -5h4l4 4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="ooo8twz0m"/><path class="tu2_m5dvw"/><path class="id4vqxf8c"/><path class="qlw91sbif"/></g>`,
		"fallback": "iconmind:overfit-gap-duotone-thin",
	});
}

export default Component;
