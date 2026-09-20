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
		"content": `<style>.cn55ckwew {
  d: path("M5 10h14v3a7.4 7.4 0 0 1 -14 0Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jnf_2db5t {
  d: path("M12 18v3");
}

.l8n_uacwg {
  fill: currentColor;
  d: path("M5 2v5h8V2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.vu337ub9w {
  fill: currentColor;
  d: path("M5 10h14v3a7.4 7.4 0 0 1 -14 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.y1fttzc7x {
  d: path("M5 2v5h8V2Z");
}
</style><g class="hntgybcog"><path class="l8n_uacwg"/><path class="vu337ub9w"/><path class="y1fttzc7x"/><path class="cn55ckwew"/><path class="jnf_2db5t"/></g>`,
		"fallback": "iconmind:toilet-duotone-thin",
	});
}

export default Component;
