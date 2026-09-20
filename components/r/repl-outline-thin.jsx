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
		"content": `<style>.b9ex0_kla {
  d: path("M6 16h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hwzub2h4e {
  d: path("M15 15h3V9");
}

.tubdyipsx {
  d: path("m16 11 2 -2 2 2");
}

.vyks9vbfn {
  d: path("M2 6a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.wlaho9c_q {
  d: path("m6 8 3 3 -3 3");
}
</style><g class="hntgybcog"><path class="vyks9vbfn"/><path class="wlaho9c_q"/><path class="b9ex0_kla"/><path class="hwzub2h4e"/><path class="tubdyipsx"/></g>`,
		"fallback": "iconmind:repl-outline-thin",
	});
}

export default Component;
