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
		"content": `<style>.d223d_x9q {
  d: path("M3 12h6");
}

.ecph9tq5i {
  d: path("M3 18h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nuz6-76is {
  d: path("M15 12h6");
}

.sixdm4bhp {
  d: path("M3 9h14");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yngda3bvc {
  d: path("M3 15h18");
}
</style><g class="hntgybcog"><path class="xgrfb-bqu"/><path class="sixdm4bhp"/><path class="d223d_x9q"/><path class="nuz6-76is"/><path class="yngda3bvc"/><path class="ecph9tq5i"/></g>`,
		"fallback": "iconmind:semantic-chunk-outline-thin",
	});
}

export default Component;
