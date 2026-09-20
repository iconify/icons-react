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
		"content": `<style>.gsvssdbyc {
  d: path("M5 12h12v4c0 3 -3 4 -6 4s-6 -1 -6 -4Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lwcjgibmo {
  d: path("M7 12c0 -3 2 -5 4 -5s4 2 4 5");
}

.v9yujbbpa {
  d: path("m17 14 3 -3");
}
</style><g class="hntgybcog"><path class="gsvssdbyc"/><path class="v9yujbbpa"/><path class="lwcjgibmo"/></g>`,
		"fallback": "iconmind:tea-ceremony-outline-thin",
	});
}

export default Component;
