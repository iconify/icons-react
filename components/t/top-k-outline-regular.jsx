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
		"content": `<style>.n-7t0yb1r {
  d: path("M3 13h18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.r4xjkv11f {
  d: path("M3 10h15");
}

.ukjt4fb6s {
  d: path("M3 17h12");
}

.xgrfb-bqu {
  d: path("M3 6h18");
}

.yvi-t83_e {
  d: path("M3 21h9");
}
</style><g class="nrj6p8qat"><path class="xgrfb-bqu"/><path class="r4xjkv11f"/><path class="n-7t0yb1r"/><path class="ukjt4fb6s"/><path class="yvi-t83_e"/></g>`,
		"fallback": "iconmind:top-k-outline-regular",
	});
}

export default Component;
