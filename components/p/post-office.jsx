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

.msad3isat {
  d: path("m8 12l4 3l4-3");
}

.ui09lnbbe {
  d: path("m3 9l9-5l9 5v11.5H3Z");
}

.yguwicc3t {
  d: path("M9.5 12h5a1.5 1.5 0 0 1 1.5 1.5v2a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 8 15.5v-2A1.5 1.5 0 0 1 9.5 12");
}
</style><g class="hntgybcog"><path class="ui09lnbbe"/><path class="yguwicc3t"/><path class="msad3isat"/></g>`,
		"fallback": "uix:post-office",
	});
}

export default Component;
