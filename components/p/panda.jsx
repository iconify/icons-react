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
		"content": `<style>.b83e9jb_d {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 12.75a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0m6.5 0a1.75 2.25 0 1 0 3.5 0a1.75 2.25 0 1 0-3.5 0");
}

.dyb220bek {
  cx: 12px;
  cy: 13.5px;
  r: 7.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.eyxk-rc0a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.75 12.5h.01m6.49 0h.01");
}

.oifdkcjlz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 17h1.5");
}

.v32_asb_l {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.82 9.24a2.75 2.75 0 1 1 2.92-2.49a7.5 7.5 0 0 0-2.92 2.49m9.44-2.49a2.75 2.75 0 1 1 2.92 2.49a7.5 7.5 0 0 0-2.92-2.49");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="v32_asb_l"/><circle class="dyb220bek"/><path class="b83e9jb_d"/><path class="eyxk-rc0a"/><path class="oifdkcjlz"/></g>`,
		"fallback": "iconoven:panda",
	});
}

export default Component;
