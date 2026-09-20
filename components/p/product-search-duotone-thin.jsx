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
		"content": `<style>.bj7wkcb4f {
  d: path("M7 7h6v6H7Z");
}

.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.pp60ghbqc {
  fill: currentColor;
  d: path("M7 7h6v6H7Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="pp60ghbqc"/><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="bj7wkcb4f"/></g>`,
		"fallback": "iconmind:product-search-duotone-thin",
	});
}

export default Component;
