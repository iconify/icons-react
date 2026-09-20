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
		"content": `<style>.h0kd0u5pn {
  d: path("m8 14 4 4 4 -4");
}

.kamdbib6v {
  d: path("M2 7h20");
}

.ohhz_s35v {
  d: path("M12 12v6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w_snsacfd {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.xslfg2evh {
  d: path("M6 21h12");
}
</style><g class="s0phu2bbs"><path class="w_snsacfd"/><path class="kamdbib6v"/><path class="ohhz_s35v"/><path class="h0kd0u5pn"/><path class="xslfg2evh"/></g>`,
		"fallback": "iconmind:late-arriving-data-outline-bold",
	});
}

export default Component;
