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
		"content": `<style>.cqqjmibjb {
  d: path("M3.75 9.25h13v6.25a5.5 5.5 0 0 1-5.5 5.5h-2a5.5 5.5 0 0 1-5.5-5.5Zm13 2h1.75a2.25 2.25 0 0 1 0 4.5h-1.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mpa2hdbbw {
  d: path("M12.75 9.25v-2.5a1.75 1.75 0 0 0-3.5 0v5.75");
}

.w7uioq-cx {
  width: 3.5px;
  height: 3.75px;
  x: 7.5px;
  y: 12.5px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><path class="cqqjmibjb"/><path class="mpa2hdbbw"/><rect class="w7uioq-cx"/></g>`,
		"fallback": "iconoven:tea-cup",
	});
}

export default Component;
