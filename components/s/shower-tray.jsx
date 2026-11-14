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
		"content": `<style>.ipyya2i8f {
  d: path("M5.5 5h13l3 11v3h-19v-3Zm-3 11h19");
}

.m_3u20b8t {
  d: path("M9 10.5a3 1.75 0 1 0 6 0a3 1.75 0 1 0-6 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ipyya2i8f"/><path class="m_3u20b8t"/></g>`,
		"fallback": "uix-sharp:shower-tray",
	});
}

export default Component;
