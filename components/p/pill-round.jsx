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
		"content": `<style>.nbsc7db3a {
  d: path("M3 10a9 4 0 1 0 18 0a9 4 0 1 0-18 0Z");
}

.qjg_o9u4m {
  d: path("M3 10v4a9 4 0 0 0 18 0v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nbsc7db3a"/><path class="qjg_o9u4m"/></g>`,
		"fallback": "uix-sharp:pill-round",
	});
}

export default Component;
