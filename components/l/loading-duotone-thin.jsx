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

.mcj52c2nx {
  d: path("M12 3a9 9 0 1 1 -9 9");
}

.vxhsoobap {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M12 3a9 9 0 1 1 -9 9");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="vxhsoobap"/><path class="mcj52c2nx"/></g>`,
		"fallback": "iconmind:loading-duotone-thin",
	});
}

export default Component;
