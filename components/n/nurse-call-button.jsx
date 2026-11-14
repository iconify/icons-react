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
		"content": `<style>.aiexuacer {
  d: path("M8.25 8.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm1.25 4.75h3M11 16.5c0 3 3 3.5 5.5 3c2.25-.5 3.5.25 5 2");
}

.eh6osq55q {
  d: path("M8 2.5h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eh6osq55q"/><path class="aiexuacer"/></g>`,
		"fallback": "uix-sharp:nurse-call-button",
	});
}

export default Component;
