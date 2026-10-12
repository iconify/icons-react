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

.m58i_obwy {
  d: path("M16 2.75c.85 1.1 1.35 1.85 1.35 2.5a1.35 1.35 0 0 1-2.7 0c0-.65.5-1.4 1.35-2.5m-7.25 5.5h5m-2.5 0v2.5");
}

.s-cm9nydx {
  width: 14px;
  height: 10.5px;
  x: 4.25px;
  y: 10.75px;
  rx: 2.5px;
}

.wwb5mubuw {
  d: path("M8 14.25v4.25m10.25.25h3");
}
</style><g class="hntgybcog"><path class="m58i_obwy"/><rect class="s-cm9nydx"/><path class="wwb5mubuw"/></g>`,
		"fallback": "iconoven:rainwater-tank",
	});
}

export default Component;
