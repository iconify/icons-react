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
		"content": `<style>.e6qrc6bvk {
  d: path("M7 6.5v-4h10v4M6 16H4.5a2 2 0 0 1-2-2V8.5a2 2 0 0 1 2-2h15a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H18");
}

.kwnarmb4h {
  d: path("M9.75 16.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}

.nwq383cjt {
  fill: currentColor;
  d: path("M12 14.25a2.25 2.25 0 0 1 0 4.5Z");
}

.u4ri-ub-s {
  d: path("M6 11.5h12v10H6Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e6qrc6bvk"/><path class="u4ri-ub-s"/><path class="kwnarmb4h"/><path class="nwq383cjt"/></g>`,
		"fallback": "uix-sharp:print-mono",
	});
}

export default Component;
