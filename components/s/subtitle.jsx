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
		"content": `<style>.dgefj64rk {
  d: path("m11 7.07l2.5 1.61q.5.32 0 .64L11 10.93q-.5.32-.5-.28v-3.3q0-.6.5-.28m-4.25 7.18h10.5m-8.5 2.5h6.5");
}

.fr9wc8ere {
  width: 18.5px;
  height: 16.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><rect class="fr9wc8ere"/><path class="dgefj64rk"/></g>`,
		"fallback": "iconoven:subtitle",
	});
}

export default Component;
