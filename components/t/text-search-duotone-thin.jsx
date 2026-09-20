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
		"content": `<style>.e2rc7m64w {
  d: path("M13.5 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.edsmp8bai {
  d: path("M3 18h8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t407ddc6o {
  d: path("M3 12h8");
}

.wus2r4r7n {
  d: path("m18.5 17 2.5 2.5");
}

.x-mvqcbsw {
  fill: currentColor;
  d: path("M13.5 15a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xgrfb-bqu {
  d: path("M3 6h18");
}
</style><g class="hntgybcog"><path class="x-mvqcbsw"/><path class="xgrfb-bqu"/><path class="t407ddc6o"/><path class="edsmp8bai"/><path class="e2rc7m64w"/><path class="wus2r4r7n"/></g>`,
		"fallback": "iconmind:text-search-duotone-thin",
	});
}

export default Component;
