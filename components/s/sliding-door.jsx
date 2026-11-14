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
		"content": `<style>.cbovneb7k {
  d: path("M6.125 3.5h11.75A2.625 2.625 0 0 1 20.5 6.125v11.75a2.625 2.625 0 0 1-2.625 2.625H6.125A2.625 2.625 0 0 1 3.5 17.875V6.125A2.625 2.625 0 0 1 6.125 3.5M12 3.5v17");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wy1ae8b5k {
  d: path("m7.5 10l2 2l-2 2m9-4l-2 2l2 2");
}
</style><g class="hntgybcog"><path class="cbovneb7k"/><path class="wy1ae8b5k"/></g>`,
		"fallback": "uix:sliding-door",
	});
}

export default Component;
