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

.ic3tlbtae {
  d: path("m3.25 15l17-4v4.25l-17 3.25Z");
}

.jf_a1l9lb {
  d: path("M3.25 15L14.5 6.75a2 2 0 0 1 3.25 1.15a2 2 0 0 1 2.5 3.1Z");
}
</style><g class="hntgybcog"><path class="jf_a1l9lb"/><path class="ic3tlbtae"/></g>`,
		"fallback": "iconoven:pie",
	});
}

export default Component;
