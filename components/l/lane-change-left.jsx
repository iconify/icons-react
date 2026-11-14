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
		"content": `<style>.fcn10p8ye {
  d: path("M2.5 2.5v19m19-19v19M12 2.5v4m0 11v4m4 0V16c0-4-8-4-8-8V4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xfqpozbou {
  d: path("M5.25 6.75L8 4l2.75 2.75");
}
</style><g class="hntgybcog"><path class="fcn10p8ye"/><path class="xfqpozbou"/></g>`,
		"fallback": "uix:lane-change-left",
	});
}

export default Component;
