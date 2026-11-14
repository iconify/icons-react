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
		"content": `<style>.e-jr8acgi {
  d: path("M5.5 7V5.5A1.5 1.5 0 0 1 7 4h13a1.5 1.5 0 0 1 1.5 1.5v11A1.5 1.5 0 0 1 20 18h-1.5");
}

.ghbfbkb_o {
  d: path("M5.125 7h10.75A2.625 2.625 0 0 1 18.5 9.625v9.25a2.625 2.625 0 0 1-2.625 2.625H5.125A2.625 2.625 0 0 1 2.5 18.875v-9.25A2.625 2.625 0 0 1 5.125 7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.keta8j_6y {
  d: path("m6 14.5l4.5-4l4.5 4v4H6z");
}
</style><g class="hntgybcog"><path class="ghbfbkb_o"/><path class="e-jr8acgi"/><path class="keta8j_6y"/></g>`,
		"fallback": "uix:photo-gallery-property",
	});
}

export default Component;
