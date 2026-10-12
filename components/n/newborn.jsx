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
		"content": `<style>.argn9bbqd {
  cx: 12px;
  cy: 8.25px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jgv7wobfh {
  width: 10.5px;
  height: 18.25px;
  x: 6.75px;
  y: 3px;
  rx: 5.25px;
}

.ktnabfbml {
  d: path("m6.75 13.5l10.5 3.5");
}
</style><g class="hntgybcog"><rect class="jgv7wobfh"/><circle class="argn9bbqd"/><path class="ktnabfbml"/></g>`,
		"fallback": "iconoven:newborn",
	});
}

export default Component;
