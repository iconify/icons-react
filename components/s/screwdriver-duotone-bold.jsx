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
		"content": `<style>.covr1fb7y {
  d: path("m16.5 7.5 3 -3");
}

.n11stdb8v {
  fill: currentColor;
  d: path("m4 17 4 -4 3 3 -4 4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.une6cneix {
  d: path("m4 17 4 -4 3 3 -4 4Z");
}

.z27853bvv {
  d: path("M9.5 14.5 18 6");
}
</style><g class="s0phu2bbs"><path class="n11stdb8v"/><path class="une6cneix"/><path class="z27853bvv"/><path class="covr1fb7y"/></g>`,
		"fallback": "iconmind:screwdriver-duotone-bold",
	});
}

export default Component;
