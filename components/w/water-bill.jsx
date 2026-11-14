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
		"content": `<style>.ghe12obwf {
  d: path("M5 2.5h14v19L16.75 20l-2.25 1.5L12 20l-2.5 1.5L7.25 20L5 21.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lqgmfgbop {
  d: path("M12 5.5S8.5 9 8.5 11a3.5 3.5 0 0 0 7 0c0-2-3.5-5.5-3.5-5.5M8.5 17h7");
}
</style><g class="hntgybcog"><path class="ghe12obwf"/><path class="lqgmfgbop"/></g>`,
		"fallback": "uix:water-bill",
	});
}

export default Component;
