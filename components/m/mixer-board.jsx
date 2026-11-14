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
		"content": `<style>.fvid7jbvs {
  d: path("M7.75 2.5h8.5a5.25 5.25 0 0 1 5.25 5.25v8.5a5.25 5.25 0 0 1-5.25 5.25h-8.5a5.25 5.25 0 0 1-5.25-5.25v-8.5A5.25 5.25 0 0 1 7.75 2.5M7 6v6.5m0 3V18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iyhvav3yr {
  d: path("M5.5 14a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M12 6v1.5m0 3V18m-1.5-9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M17 6v7.5m0 3V18m-1.5-3a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="fvid7jbvs"/><path class="iyhvav3yr"/></g>`,
		"fallback": "uix:mixer-board",
	});
}

export default Component;
