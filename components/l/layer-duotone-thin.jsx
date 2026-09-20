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
		"content": `<style>.fmma7fifq {
  d: path("M8 22h8");
}

.fmulrlbrn {
  d: path("m4 12 8 -8 8 8 -8 8Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpszpfbjn {
  fill: currentColor;
  d: path("m4 12 8 -8 8 8 -8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="hntgybcog"><path class="mpszpfbjn"/><path class="fmulrlbrn"/><path class="fmma7fifq"/></g>`,
		"fallback": "iconmind:layer-duotone-thin",
	});
}

export default Component;
