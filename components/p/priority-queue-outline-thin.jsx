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
		"content": `<style>.ecismzb4h {
  d: path("M20 15V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh31pt5af {
  d: path("M3 13h14");
}

.mo-r4ib5t {
  d: path("m18 11 2 -2 2 2");
}

.t99bgtbzx {
  d: path("M3 18h14");
}

.zuuudpbwi {
  d: path("M3 8h14");
}
</style><g class="hntgybcog"><path class="zuuudpbwi"/><path class="kh31pt5af"/><path class="t99bgtbzx"/><path class="ecismzb4h"/><path class="mo-r4ib5t"/></g>`,
		"fallback": "iconmind:priority-queue-outline-thin",
	});
}

export default Component;
