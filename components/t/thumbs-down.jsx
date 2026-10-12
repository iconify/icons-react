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
		"content": `<style>.fkx1pbo5i {
  d: path("m8.25 13.75l3.5 6.5a2 2 0 0 0 3-2.2l-.9-3.55h4.65a2.25 2.25 0 0 0 2.2-2.7l-1.4-6.5a2.25 2.25 0 0 0-2.2-1.8H8.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rt82_gyqh {
  width: 3px;
  height: 10.25px;
  x: 2.75px;
  y: 3.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="fkx1pbo5i"/><rect class="rt82_gyqh"/></g>`,
		"fallback": "iconoven:thumbs-down",
	});
}

export default Component;
