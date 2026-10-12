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
		"content": `<style>.aqmj_4big {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.br_p97bed {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 11a3.75 3.75 0 0 1 7.5 0Zm3.75 0v5a1 1 0 0 1-2 0M14 9.5a1.75 1.75 0 1 1 2.5 1.6c-.5.25-.75.65-.75 1.15v1");
}

.wu8tkc12a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 16h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="aqmj_4big"/><path class="br_p97bed"/><path class="wu8tkc12a"/></g>`,
		"fallback": "iconoven:lost-and-found",
	});
}

export default Component;
