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
		"content": `<style>.k5ecbgu2w {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.mcubrkb2y {
  d: path("M2 21h20M5 21V9m14 12V9M2 9h20M5 9l5.5 -5.5h3L19 9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.si80rde7l {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m15 12 -3 3h2.5l-3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.znp96bc9s {
  d: path("m15 12 -3 3h2.5l-3 3");
}
</style><g class="nrj6p8qat"><path class="k5ecbgu2w"/><path class="si80rde7l"/><path class="mcubrkb2y"/><path class="znp96bc9s"/></g>`,
		"fallback": "iconmind:swift-transfer-duotone-regular",
	});
}

export default Component;
