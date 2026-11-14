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
		"content": `<style>.f8the2bzh {
  d: path("M6 3.5h12a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-15a1 1 0 0 1 1-1Z");
}

.qd2j_5bwr {
  d: path("M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm2.5 2.5v2m0 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f8the2bzh"/><path class="qd2j_5bwr"/></g>`,
		"fallback": "uix-sharp:tracking-gps-tag",
	});
}

export default Component;
