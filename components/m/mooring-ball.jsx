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
		"content": `<style>.df978zbzh {
  d: path("M10 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0M3 20q3-2.25 6 0t6 0t6 0M6.5 11.5h11");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zg2q79ben {
  d: path("M6.5 11.5a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0");
}
</style><g class="hntgybcog"><path class="zg2q79ben"/><path class="df978zbzh"/></g>`,
		"fallback": "uix:mooring-ball",
	});
}

export default Component;
