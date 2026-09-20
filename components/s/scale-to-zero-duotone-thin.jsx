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
		"content": `<style>.e5rxwxb6q {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M3 3v18h18");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.f_0n8xbzv {
  d: path("m5 7 6 6 8 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j3zd1taaz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 7 6 6 8 8");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="j3zd1taaz"/><path class="qe97cg-lx"/><path class="f_0n8xbzv"/></g>`,
		"fallback": "iconmind:scale-to-zero-duotone-thin",
	});
}

export default Component;
