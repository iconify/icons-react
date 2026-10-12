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

.i39m0-b-e {
  width: 7px;
  height: 5px;
  x: 8.5px;
  y: 9.5px;
  rx: 1px;
}

.icmt938en {
  width: 13px;
  height: 18.5px;
  x: 5.5px;
  y: 2.75px;
  rx: 4.5px;
}

.riwo9rbiy {
  d: path("M7.75 7.5c2.8-.9 5.7-.9 8.5 0m-8 9.75q3.75 1.05 7.5 0");
}
</style><g class="hntgybcog"><rect class="icmt938en"/><path class="riwo9rbiy"/><rect class="i39m0-b-e"/></g>`,
		"fallback": "iconoven:sunroof",
	});
}

export default Component;
