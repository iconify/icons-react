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
		"content": `<style>.ce0o2_jki {
  d: path("M12.25 7v3a2.5 2.5 0 0 0 5 0V7L16 8.25L14.75 7L13.5 8.25Zm2.5 5.5v6m0-1.5q-2-.25-2.5-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p44a_bruy {
  d: path("M9 2.5h11.5v19H9Zm0 0l-5.5 2V20L9 21.5");
}
</style><g class="hntgybcog"><path class="p44a_bruy"/><path class="ce0o2_jki"/></g>`,
		"fallback": "uix:mothers-day-card",
	});
}

export default Component;
