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
		"content": `<style>.a3zqh3bcj {
  d: path("M2 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.eguxbnz0i {
  d: path("M20 10a8 8 0 0 1 -16 0");
}

.he6b77rju {
  d: path("M18 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="eguxbnz0i"/><path class="a3zqh3bcj"/><path class="he6b77rju"/></g>`,
		"fallback": "iconmind:jump-rope-outline-thin",
	});
}

export default Component;
