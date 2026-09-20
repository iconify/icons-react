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
		"content": `<style>.bzuzjlbvu {
  fill: currentColor;
  d: path("M6 3v8h12V3Z");
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

.i5oa6epzy {
  d: path("M6 3v8h12V3Z");
}

.o8od38cnm {
  d: path("M4 18h16");
}

.yqiq35tbk {
  d: path("m6 3 5 5 5 -5");
}
</style><g class="hntgybcog"><path class="bzuzjlbvu"/><path class="i5oa6epzy"/><path class="yqiq35tbk"/><path class="o8od38cnm"/></g>`,
		"fallback": "iconmind:mail-delivery-duotone-thin",
	});
}

export default Component;
