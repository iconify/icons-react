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
		"content": `<style>.bbvxd2mjs {
  d: path("M3 6h10l3.5 3.5L13 13H3Z");
}

.l5_gdfbdk {
  fill: currentColor;
  d: path("M3 6h10l3.5 3.5L13 13H3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.lir4n8byf {
  fill: currentColor;
  d: path("M13 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.pg0en1bcd {
  d: path("M13 17a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.qoxqdyb0z {
  d: path("m18.5 19.5 2 2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="l5_gdfbdk"/><path class="lir4n8byf"/><path class="bbvxd2mjs"/><path class="pg0en1bcd"/><path class="qoxqdyb0z"/></g>`,
		"fallback": "iconmind:label-review-duotone-bold",
	});
}

export default Component;
