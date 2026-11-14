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

.nqi1r_bgm {
  d: path("M12 20.5s-8.5-5-8.5-11a4.5 4.5 0 0 1 8.5-2a4.5 4.5 0 0 1 8.5 2c0 6-8.5 11-8.5 11");
}

.zibzysaae {
  d: path("M7 12h2.5L11 9l2 6l1.5-3H17");
}
</style><g class="hntgybcog"><path class="nqi1r_bgm"/><path class="zibzysaae"/></g>`,
		"fallback": "uix:service-financial-health",
	});
}

export default Component;
