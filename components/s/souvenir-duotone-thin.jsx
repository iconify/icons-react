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
		"content": `<style>.fm1bn-9rw {
  fill: currentColor;
  d: path("m12 15 2 2 -2 2 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.ggik2wgcv {
  d: path("M9 9V5h6v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwjts2bwl {
  d: path("m12 15 2 2 -2 2 -2 -2Z");
}

.rhgd1j5xm {
  d: path("M4 11a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.urilmibxp {
  d: path("M4 13h16");
}

.xae9gdq-u {
  fill: currentColor;
  d: path("M4 11a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="xae9gdq-u"/><path class="fm1bn-9rw"/><path class="rhgd1j5xm"/><path class="urilmibxp"/><path class="ggik2wgcv"/><path class="iwjts2bwl"/></g>`,
		"fallback": "iconmind:souvenir-duotone-thin",
	});
}

export default Component;
