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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yc4y2ebhc {
  fill: currentColor;
  d: path("M8 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4-3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm7.5-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.zzbm4ab-k {
  d: path("M12 2.5L22 20H2Z");
}
</style><g class="ulnmmdpxh"><path class="zzbm4ab-k"/><path class="yc4y2ebhc"/></g>`,
		"fallback": "uix-sharp:loose-chippings-sign",
	});
}

export default Component;
