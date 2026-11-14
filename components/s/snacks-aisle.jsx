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
		"content": `<style>.bnfy7ebex {
  d: path("M2.5 2.5h19M7 2.5V7m10-4.5V7M2.5 7h19v13h-19Z");
}

.f7mio0sll {
  d: path("M10.25 13.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Z");
}

.t43cs6g0g {
  d: path("m8 9.5l1.25-.75l1.25.75l1.25-.75L13 9.5l1.25-.75l1.25.75c1 2.5 1 5.5 0 8l-1.25.75L13 17.5l-1.25.75l-1.25-.75l-1.25.75L8 17.5C7 15 7 12 8 9.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bnfy7ebex"/><path class="t43cs6g0g"/><path class="f7mio0sll"/></g>`,
		"fallback": "uix-sharp:snacks-aisle",
	});
}

export default Component;
