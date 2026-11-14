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
		"content": `<style>.bt7ck4uwc {
  d: path("M5.25 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm5.5 0H18m-3 0v2.75M18 12v2.75");
}

.hn7tnnbwb {
  d: path("M2.5 5h19v14h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="hn7tnnbwb"/><path class="bt7ck4uwc"/></g>`,
		"fallback": "uix-sharp:licence-key",
	});
}

export default Component;
