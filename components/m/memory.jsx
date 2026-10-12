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
		"content": `<style>.b394mbb-w {
  width: 2.5px;
  height: 4.5px;
  x: 10.75px;
  y: 8.25px;
  rx: 0.75px;
}

.c9mzlu_5f {
  d: path("M6.25 15.75v3.5m3.5-3.5v3.5m4.5-3.5v3.5m3.5-3.5v3.5");
}

.ea71racey {
  width: 2.5px;
  height: 4.5px;
  x: 16px;
  y: 8.25px;
  rx: 0.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nxsbbobij {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 5.25px;
  rx: 2px;
}

.yoy-uid8d {
  width: 2.5px;
  height: 4.5px;
  x: 5.5px;
  y: 8.25px;
  rx: 0.75px;
}
</style><g class="hntgybcog"><rect class="nxsbbobij"/><rect class="yoy-uid8d"/><rect class="b394mbb-w"/><rect class="ea71racey"/><path class="c9mzlu_5f"/></g>`,
		"fallback": "iconoven:memory",
	});
}

export default Component;
