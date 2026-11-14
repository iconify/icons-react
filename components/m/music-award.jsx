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
		"content": `<style>.hzsh5bcza {
  d: path("M5.5 5h-2v2A3 3 0 0 0 6 10m12.5-5h2v2a3 3 0 0 1-2.5 3m-6 5.5v5m-4 0h8m-7-9.75a2 1.5 0 1 0 4 0a2 1.5 0 1 0-4 0Zm4 0v-4.5");
}

.mbyygybuy {
  d: path("M5.5 3h13v6a6.5 6.5 0 0 1-13 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mbyygybuy"/><path class="hzsh5bcza"/></g>`,
		"fallback": "uix-sharp:music-award",
	});
}

export default Component;
