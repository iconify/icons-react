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
		"content": `<style>.czu33icqx {
  d: path("M4.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nldlgpbyg {
  d: path("M7 21.5L12 10l5 11.5");
}

.s4kvdkb0o {
  fill: currentColor;
  d: path("M3.25 10a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m15 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M7 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m7.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}
</style><g class="hntgybcog"><path class="czu33icqx"/><path class="nldlgpbyg"/><path class="s4kvdkb0o"/></g>`,
		"fallback": "uix:pin-ferris-wheel",
	});
}

export default Component;
