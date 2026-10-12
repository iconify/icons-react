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
		"content": `<style>.e8_44acdy {
  d: path("M2.75 17.75V4.25a1.5 1.5 0 0 1 1.5-1.5h13.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x5p0plbhw {
  width: 10px;
  height: 8.5px;
  x: 8.75px;
  y: 8.75px;
  rx: 0.75px;
}

.zovmjxbfg {
  width: 15px;
  height: 15px;
  x: 6.25px;
  y: 6.25px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="e8_44acdy"/><rect class="zovmjxbfg"/><rect class="x5p0plbhw"/></g>`,
		"fallback": "iconoven:polaroid-stack",
	});
}

export default Component;
