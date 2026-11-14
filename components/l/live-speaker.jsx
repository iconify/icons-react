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
		"content": `<style>.feououbom {
  d: path("M2.5 20c0-2.75 2.9-4.75 6.5-4.75s6.5 2 6.5 4.75c0 .6-.4 1-1 1h-11c-.6 0-1-.4-1-1ZM5.25 8.25a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0ZM17 5.5h3V11h-3Z");
}

.p21zcgbpg {
  d: path("M15.75 9.75a2.75 2.75 0 0 0 5.5 0M18.5 12.5v2.25");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="feououbom"/><path class="p21zcgbpg"/></g>`,
		"fallback": "uix-sharp:live-speaker",
	});
}

export default Component;
