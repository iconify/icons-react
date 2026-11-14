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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.umawoe4ex {
  d: path("M21.176 9.541a9.5 9.5 0 1 1-2.458-4.259");
}

.yeww5nm3b {
  d: path("M16.25 5.25h2.5v-2.5m-6.089 5.84l.31.744a1.5 1.5 0 0 0 1.265.919l.803.064a.716.716 0 0 1 .409 1.258l-.612.524a1.5 1.5 0 0 0-.484 1.487l.187.784a.716.716 0 0 1-1.07.778l-.687-.42a1.5 1.5 0 0 0-1.564 0l-.687.42a.716.716 0 0 1-1.07-.778l.187-.784a1.5 1.5 0 0 0-.484-1.487l-.612-.524a.716.716 0 0 1 .409-1.258l.803-.064a1.5 1.5 0 0 0 1.265-.919l.31-.744a.716.716 0 0 1 1.322 0");
}
</style><g class="hntgybcog"><path class="umawoe4ex"/><path class="yeww5nm3b"/></g>`,
		"fallback": "uix:review-cycle",
	});
}

export default Component;
