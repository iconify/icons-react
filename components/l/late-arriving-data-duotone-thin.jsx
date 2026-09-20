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
		"content": `<style>.ejc-ljj9t {
  fill: currentColor;
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.h0kd0u5pn {
  d: path("m8 14 4 4 4 -4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kamdbib6v {
  d: path("M2 7h20");
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.w_snsacfd {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="hntgybcog"><path class="ejc-ljj9t"/><path class="w_snsacfd"/><path class="kamdbib6v"/><path class="ohhz_s35v"/><path class="h0kd0u5pn"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:late-arriving-data-duotone-thin",
	});
}

export default Component;
