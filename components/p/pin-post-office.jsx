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
		"content": `<style>.gapqtsrfr {
  d: path("M9.5 12h5a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 16.5v-3A1.5 1.5 0 0 1 9.5 12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.idp5tvbid {
  d: path("m7.25 6l3.816-2.41a1.75 1.75 0 0 1 1.868 0L16.75 6a1.626 1.626 0 0 1-.868 3H8.118a1.626 1.626 0 0 1-.868-3M4.5 9v12h15V9");
}

.msad3isat {
  d: path("m8 12l4 3l4-3");
}
</style><g class="hntgybcog"><path class="idp5tvbid"/><path class="gapqtsrfr"/><path class="msad3isat"/></g>`,
		"fallback": "uix:pin-post-office",
	});
}

export default Component;
