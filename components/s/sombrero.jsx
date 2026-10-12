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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ieoqfqbzy {
  d: path("M2.75 12.75c1.5 2.5 3.5 4 5.75 4h7c2.25 0 4.25-1.5 5.75-4");
}

.qlx-5obcj {
  d: path("m8.5 16.75l2-9.75c.3-1.4 2.7-1.4 3 0l2 9.75ZM9.25 13h5.5");
}
</style><g class="hntgybcog"><path class="qlx-5obcj"/><path class="ieoqfqbzy"/></g>`,
		"fallback": "iconoven:sombrero",
	});
}

export default Component;
