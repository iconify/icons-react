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
		"content": `<style>.gnffbu21w {
  d: path("m6.5 14l3-3.75M10 14l1.5-1.9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kxl7_29fo {
  d: path("M10 2.75h4m-2 0v4.5");
}

.moc6ujbgs {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7.25px;
  rx: 3.5px;
}
</style><g class="hntgybcog"><path class="kxl7_29fo"/><rect class="moc6ujbgs"/><path class="gnffbu21w"/></g>`,
		"fallback": "iconoven:rearview-mirror",
	});
}

export default Component;
