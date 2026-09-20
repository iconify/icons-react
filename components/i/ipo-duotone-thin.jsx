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
		"content": `<style>.e0z4bf60t {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M9 15V8a3 3 0 0 1 6 0v7Zm0 -4 -3 3v3h3m6 -6 3 3v3h-3m-3 -2v5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.g36u2t9sm {
  d: path("M9 15V8a3 3 0 0 1 6 0v7Zm0 -4 -3 3v3h3m6 -6 3 3v3h-3m-3 -2v5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e0z4bf60t"/><path class="g36u2t9sm"/></g>`,
		"fallback": "iconmind:ipo-duotone-thin",
	});
}

export default Component;
