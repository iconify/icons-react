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

.k5yx_gble {
  d: path("M12 18a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.mk37pkb8m {
  d: path("M13 15a3 3 0 0 1 3 3");
}

.skbifdbcx {
  d: path("M8.69 3.37a4 4 0 1 1 -3.38 0");
}

.xupj3fbjb {
  d: path("M13 12a6 6 0 0 1 6 6");
}
</style><g class="hntgybcog"><path class="skbifdbcx"/><path class="mk37pkb8m"/><path class="xupj3fbjb"/><path class="k5yx_gble"/></g>`,
		"fallback": "iconmind:subscribe-agent-outline-thin",
	});
}

export default Component;
