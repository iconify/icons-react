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

.ea0o9gbbj {
  d: path("m5 6 6 6 4 4h4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ol4u5lalw {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m5 6 6 6 4 4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.qe97cg-lx {
  d: path("M3 3v18h18");
}
</style><g class="hntgybcog"><path class="e5rxwxb6q"/><path class="ol4u5lalw"/><path class="qe97cg-lx"/><path class="ea0o9gbbj"/></g>`,
		"fallback": "iconmind:train-loss-duotone-thin",
	});
}

export default Component;
