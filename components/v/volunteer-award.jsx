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
		"content": `<style>.cgtkc4bmn {
  d: path("M6 15.25a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p0kxabb-t {
  d: path("M8 2.75h8l-2.5 6.5h-3Zm4.441 10.643l.092.186a1.5 1.5 0 0 0 1.129.821l.205.03a.492.492 0 0 1 .273.838l-.149.145a1.5 1.5 0 0 0-.431 1.328l.035.204a.492.492 0 0 1-.713.519l-.184-.097a1.5 1.5 0 0 0-1.396 0l-.184.097a.492.492 0 0 1-.713-.519l.035-.204a1.5 1.5 0 0 0-.431-1.328l-.149-.145a.492.492 0 0 1 .273-.838l.205-.03a1.5 1.5 0 0 0 1.129-.821l.092-.186a.492.492 0 0 1 .882 0");
}
</style><g class="hntgybcog"><path class="cgtkc4bmn"/><path class="p0kxabb-t"/></g>`,
		"fallback": "uix:volunteer-award",
	});
}

export default Component;
