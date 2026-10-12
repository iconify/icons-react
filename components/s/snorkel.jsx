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

.jz67m_bzv {
  d: path("M20.5 2.75V16.5a4.25 4.25 0 0 1-4.25 4.25H13.5v-2");
}

.z-ldr81si {
  d: path("M2.75 10.5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3a3 3 0 0 1-3 3h-1.5l-2.25-2l-2.25 2h-3a3 3 0 0 1-3-3Z");
}
</style><g class="hntgybcog"><path class="z-ldr81si"/><path class="jz67m_bzv"/></g>`,
		"fallback": "iconoven:snorkel",
	});
}

export default Component;
