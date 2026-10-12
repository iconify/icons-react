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

.ltytdgbty {
  d: path("M2.75 12.5a4.5 1.5 0 0 0 9 0c0 5-1.5 8.75-4.5 8.75s-4.5-3.75-4.5-8.75m12-3.5a3.25 1.25 0 0 0 6.5 0l-.75 11a1.25 1.25 0 0 1-1.25 1.25h-2.5A1.25 1.25 0 0 1 15.5 20Z");
}

.okdgt0wjq {
  d: path("M2.75 12.5a4.5 1.5 0 1 0 9 0a4.5 1.5 0 1 0-9 0m12-3.5a3.25 1.25 0 1 0 6.5 0a3.25 1.25 0 1 0-6.5 0m1 6.5h4.5");
}
</style><g class="hntgybcog"><path class="ltytdgbty"/><path class="okdgt0wjq"/></g>`,
		"fallback": "iconoven:tabla",
	});
}

export default Component;
