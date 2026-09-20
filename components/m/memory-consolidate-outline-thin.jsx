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
		"content": `<style>.e7pgrp-wx {
  d: path("M2 12h6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jtj73ab7i {
  d: path("M2 17h6");
}

.lko_r07tc {
  d: path("M2 7h6");
}

.q6c5h5b2r {
  d: path("m10 9.5 2.5 2.5 -2.5 2.5");
}

.rv19xcoye {
  d: path("M15.5 12a2 2 0 0 1 2 -2H20a2 2 0 0 1 2 2 2 2 0 0 1 -2 2h-2.5a2 2 0 0 1 -2 -2");
}
</style><g class="hntgybcog"><path class="lko_r07tc"/><path class="e7pgrp-wx"/><path class="jtj73ab7i"/><path class="q6c5h5b2r"/><path class="rv19xcoye"/></g>`,
		"fallback": "iconmind:memory-consolidate-outline-thin",
	});
}

export default Component;
