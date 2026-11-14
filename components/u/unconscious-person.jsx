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
		"content": `<style>.cy8lb22us {
  d: path("M5.5 12.5a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0Zm-3 8h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yn69knblx {
  d: path("M11.25 11.5a1.5 1.5 0 1 1-1.5-1.5m0 1.5h.01m5.99 0a1.5 1.5 0 1 1-1.5-1.5m0 1.5h.01m-3.76 4h3");
}
</style><g class="ulnmmdpxh"><path class="cy8lb22us"/><path class="yn69knblx"/></g>`,
		"fallback": "uix-sharp:unconscious-person",
	});
}

export default Component;
