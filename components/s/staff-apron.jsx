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
		"content": `<style>.gzrqbcmut {
  d: path("M11 14h2a1.5 1.5 0 0 1 1.5 1.5v.5a1.5 1.5 0 0 1-1.5 1.5h-2A1.5 1.5 0 0 1 9.5 16v-.5A1.5 1.5 0 0 1 11 14M6.5 9l-3 3m14-3l3 3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qcdpe_btd {
  d: path("M6.5 9h11v10.5A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5Z");
}

.z3nyslhix {
  d: path("M8 3v3a4 4 0 0 0 8 0V3");
}
</style><g class="hntgybcog"><path class="z3nyslhix"/><path class="qcdpe_btd"/><path class="gzrqbcmut"/></g>`,
		"fallback": "uix:staff-apron",
	});
}

export default Component;
