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
		"content": `<style>.bcvc8uidm {
  d: path("M13.5 6.5h4v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w8t62abch {
  d: path("M3.5 9V5.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H15M14 10l3.5-3.5");
}

.wubs-0b7o {
  d: path("M3.5 12.5h8v8h-8Z");
}
</style><g class="ulnmmdpxh"><path class="wubs-0b7o"/><path class="w8t62abch"/><path class="bcvc8uidm"/></g>`,
		"fallback": "uix-sharp:scale-proportional",
	});
}

export default Component;
