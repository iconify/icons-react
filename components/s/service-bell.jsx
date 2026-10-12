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
		"content": `<style>.bxmfmcbsh {
  d: path("m5 5.75l1.5 1.5M19 5.75l-1.5 1.5");
}

.c-fock42v {
  width: 17.5px;
  height: 4.5px;
  x: 3.25px;
  y: 16.5px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z81cfml7w {
  d: path("M9.75 5.25h4.5m-2.25 0v5M5.75 16.5a6.25 6.25 0 0 1 12.5 0Z");
}
</style><g class="hntgybcog"><path class="z81cfml7w"/><rect class="c-fock42v"/><path class="bxmfmcbsh"/></g>`,
		"fallback": "iconoven:service-bell",
	});
}

export default Component;
