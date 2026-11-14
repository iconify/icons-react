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
		"content": `<style>.cn682mbmi {
  d: path("M11.4 19.5H3.5v-13h12v5.7M7 6.5v-4h5v4M6.5 21.75h.01m5.99 0h.01M14 18a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}

.nr2kwkbiv {
  d: path("M17 15h2a3 3 0 0 1 0 6h-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cn682mbmi"/><path class="nr2kwkbiv"/></g>`,
		"fallback": "uix-sharp:per-diem",
	});
}

export default Component;
