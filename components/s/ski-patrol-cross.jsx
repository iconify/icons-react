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
		"content": `<style>.faa2t2bzh {
  d: path("M9.75 6.5h4.5v3.25h3.25v4.5h-3.25v3.25h-4.5v-3.25H6.5v-4.5h3.25Z");
}

.mcw0knbal {
  d: path("M4.5 3h15A1.5 1.5 0 0 1 21 4.5v15a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15A1.5 1.5 0 0 1 4.5 3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mcw0knbal"/><path class="faa2t2bzh"/></g>`,
		"fallback": "uix-sharp:ski-patrol-cross",
	});
}

export default Component;
