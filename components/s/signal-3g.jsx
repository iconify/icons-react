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
		"content": `<style>.ioppq8b0v {
  fill: currentColor;
  d: path("M3.5 14H7v6.5H3.5ZM10 9.25h3.5V20.5H10Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4px5cd2k {
  d: path("M16.5 3.5H20v17h-3.5Z");
}
</style><g class="ulnmmdpxh"><path class="ioppq8b0v"/><path class="v4px5cd2k"/></g>`,
		"fallback": "uix-sharp:signal-3g",
	});
}

export default Component;
