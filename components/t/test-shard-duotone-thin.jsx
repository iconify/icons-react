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
		"content": `<style>.b7kolodzb {
  fill: currentColor;
  d: path("m3 8 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.g_po6wbmj {
  fill: currentColor;
  d: path("m10 8 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j_72l_3ug {
  d: path("m17 8 4 4 -4 4Z");
}

.j-70hcbzd {
  d: path("m10 8 4 4 -4 4Z");
}

.kt4jgwb2r {
  d: path("m3 8 4 4 -4 4Z");
}

.tfixfresq {
  fill: currentColor;
  d: path("m17 8 4 4 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="b7kolodzb"/><path class="g_po6wbmj"/><path class="tfixfresq"/><path class="kt4jgwb2r"/><path class="j-70hcbzd"/><path class="j_72l_3ug"/></g>`,
		"fallback": "iconmind:test-shard-duotone-thin",
	});
}

export default Component;
