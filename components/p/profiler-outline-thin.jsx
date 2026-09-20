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
		"content": `<style>.atoje4bsc {
  d: path("M2 6h20");
}

.bbj1r8bpd {
  d: path("M4 14h12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uchchabsk {
  d: path("M2 10h14");
}

.vybq366mg {
  d: path("M4 18h6");
}
</style><g class="hntgybcog"><path class="atoje4bsc"/><path class="uchchabsk"/><path class="bbj1r8bpd"/><path class="vybq366mg"/></g>`,
		"fallback": "iconmind:profiler-outline-thin",
	});
}

export default Component;
