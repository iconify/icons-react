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
		"content": `<style>.d6cu3qpew {
  d: path("M17 3h4v18h-4");
}

.g01zyvbwi {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ldodvk1_f {
  d: path("M7 3H3v18h4");
}

.vw_dl18nv {
  d: path("M12 10.5v3");
}

.z8owzccti {
  fill: currentColor;
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0 -9 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="z8owzccti"/><path class="ldodvk1_f"/><path class="d6cu3qpew"/><path class="g01zyvbwi"/><path class="vw_dl18nv"/></g>`,
		"fallback": "iconmind:reasoning-budget-duotone-thin",
	});
}

export default Component;
