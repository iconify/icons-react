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

.l2bljsbmn {
  d: path("M12 9v11");
}

.u78lc2bnx {
  d: path("M6 20h12");
}

.xgzlj4bea {
  d: path("m5 8 3 -3h11v3Z");
}
</style><g class="hntgybcog"><path class="xgzlj4bea"/><path class="l2bljsbmn"/><path class="u78lc2bnx"/></g>`,
		"fallback": "iconmind:lecture-outline-thin",
	});
}

export default Component;
