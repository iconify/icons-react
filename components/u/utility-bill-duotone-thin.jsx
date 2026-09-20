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
		"content": `<style>.aa-4hgzip {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m15 9 -3 3h2.5l-3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.b7uyqxwtl {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c2-gs7b7d {
  d: path("m15 9 -3 3h2.5l-3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ky4omnbla {
  d: path("M4 5h14l4 4v8a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2V7a2 2 0 0 1 2 -2m14 0v4h4");
}
</style><g class="hntgybcog"><path class="b7uyqxwtl"/><path class="aa-4hgzip"/><path class="ky4omnbla"/><path class="c2-gs7b7d"/></g>`,
		"fallback": "iconmind:utility-bill-duotone-thin",
	});
}

export default Component;
