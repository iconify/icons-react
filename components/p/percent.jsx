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
		"content": `<style>.ekwj1i_0m {
  cx: 17px;
  cy: 17px;
  r: 2.75px;
}

.fyjv9jblo {
  d: path("m18.75 5.25l-13.5 13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y4edlk8up {
  cx: 7px;
  cy: 7px;
  r: 2.75px;
}
</style><g class="hntgybcog"><circle class="y4edlk8up"/><circle class="ekwj1i_0m"/><path class="fyjv9jblo"/></g>`,
		"fallback": "iconoven:percent",
	});
}

export default Component;
