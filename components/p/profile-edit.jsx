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

.ow84_7bkc {
  d: path("M3.25 21c0-3.5 2.8-6.25 6.25-6.25c1.15 0 2.2.3 3.15.8m7.17-.73l.86.86q.42.42 0 .84l-4.01 4.01q-.42.42-1.01.51l-.82.12q-.59.09-.5-.5l.12-.82q.09-.59.51-1.01l4.01-4.01q.42-.42.84 0");
}

.v2el3udsi {
  cx: 9.5px;
  cy: 7.5px;
  r: 3.75px;
}
</style><g class="hntgybcog"><circle class="v2el3udsi"/><path class="ow84_7bkc"/></g>`,
		"fallback": "iconoven:profile-edit",
	});
}

export default Component;
