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
		"content": `<style>.ayfng4o1h {
  d: path("M5 6v10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pg4kk0y8v {
  d: path("M13 6v7");
}

.se8tg3byo {
  d: path("M5 6a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.sy7mvubrh {
  d: path("M9 13h8v6H9Z");
}
</style><g class="hntgybcog"><path class="se8tg3byo"/><path class="ayfng4o1h"/><path class="pg4kk0y8v"/><path class="sy7mvubrh"/></g>`,
		"fallback": "iconmind:pulley-outline-thin",
	});
}

export default Component;
