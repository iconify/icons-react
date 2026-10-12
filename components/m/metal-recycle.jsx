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
		"content": `<style>.cx9r6fb5l {
  d: path("M8.5 8a3.5 1.5 0 0 0 7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wdd_k9f2l {
  d: path("M16.5 4.21a9 9 0 1 1-9 0m-.65 2.42l.65-2.42l-2.42-.65");
}

.xsfbwc9gf {
  d: path("M8.5 8a3.5 1.5 0 0 1 7 0v8a3.5 1.5 0 0 1-7 0Z");
}
</style><g class="hntgybcog"><path class="wdd_k9f2l"/><path class="xsfbwc9gf"/><path class="cx9r6fb5l"/></g>`,
		"fallback": "iconoven:metal-recycle",
	});
}

export default Component;
