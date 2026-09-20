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
		"content": `<style>.e0001wg8c {
  d: path("M17 5v12");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxoe7gx5p {
  d: path("M12 5v12");
}

.tr_jskylo {
  d: path("M7 5v12");
}

.xf07dvr8m {
  d: path("M2 5h20");
}

.y_21nobec {
  d: path("m3 21 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="hntgybcog"><path class="xf07dvr8m"/><path class="tr_jskylo"/><path class="hxoe7gx5p"/><path class="e0001wg8c"/><path class="y_21nobec"/></g>`,
		"fallback": "iconmind:waterfall-outline-thin",
	});
}

export default Component;
