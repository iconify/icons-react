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
		"content": `<style>.gd_1a3mcf {
  d: path("M3.25 7.5V5.75a2.5 2.5 0 0 1 2.5-2.5H7.5m9 0h1.75a2.5 2.5 0 0 1 2.5 2.5V7.5m0 9v1.75a2.5 2.5 0 0 1-2.5 2.5H16.5m-9 0H5.75a2.5 2.5 0 0 1-2.5-2.5V16.5m9.44-9.6l3.37 1.95q.69.4.69 1.2v3.9q0 .8-.69 1.2l-3.37 1.95q-.69.4-1.38 0l-3.37-1.95q-.69-.4-.69-1.2v-3.9q0-.8.69-1.2l3.37-1.95q.69-.4 1.38 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.toehbab5l {
  d: path("M7.6 9.45L12 12l4.4-2.55M12 12v5.1");
}
</style><g class="hntgybcog"><path class="gd_1a3mcf"/><path class="toehbab5l"/></g>`,
		"fallback": "iconoven:object-detect",
	});
}

export default Component;
