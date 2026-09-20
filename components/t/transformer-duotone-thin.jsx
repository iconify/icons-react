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
		"content": `<style>.duvzkqbwy {
  d: path("M8 9.5h8");
}

.edllzuogn {
  fill: currentColor;
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
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

.iaozfqbuj {
  d: path("M14.5 4H17a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V8l4 -4h2.5");
}

.m6r9k7-tj {
  d: path("M8 14.5h8");
}

.w_jkatblo {
  d: path("M12 7v10");
}
</style><g class="hntgybcog"><path class="edllzuogn"/><path class="iaozfqbuj"/><path class="duvzkqbwy"/><path class="m6r9k7-tj"/><path class="w_jkatblo"/></g>`,
		"fallback": "iconmind:transformer-duotone-thin",
	});
}

export default Component;
