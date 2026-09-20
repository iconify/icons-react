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
		"content": `<style>.dstoc8fcb {
  d: path("m15 6 -6 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n0n63pb2v {
  d: path("M4 15v4h16v-4");
}

.tvqjonb4b {
  d: path("m9 6 6 6");
}
</style><g class="hntgybcog"><path class="n0n63pb2v"/><path class="tvqjonb4b"/><path class="dstoc8fcb"/></g>`,
		"fallback": "iconmind:memory-forget-outline-thin",
	});
}

export default Component;
