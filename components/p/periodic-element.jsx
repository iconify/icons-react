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

.kxq9ww4ym {
  width: 16.5px;
  height: 16.5px;
  x: 3.75px;
  y: 3.75px;
  rx: 2.5px;
}

.nme2a4b2w {
  d: path("M7.25 6.75V8m2.25 2.5V17m5-6.5V17m-5-3.25h5");
}
</style><g class="hntgybcog"><rect class="kxq9ww4ym"/><path class="nme2a4b2w"/></g>`,
		"fallback": "iconoven:periodic-element",
	});
}

export default Component;
