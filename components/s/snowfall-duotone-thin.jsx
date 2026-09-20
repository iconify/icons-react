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
		"content": `<style>.a1e57xbge {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 21h16");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m-otzgx8d {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M8 3.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.uadcs425n {
  d: path("M16 10.5v7m-3.5 0 7 -7");
}

.uih_zvhtv {
  d: path("M4 21h16");
}

.uof3uv2_w {
  d: path("M8 3.5v7m-3.5 0 7 -7");
}

.zhm4otbmz {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 10.5v7m-3.5 0 7 -7");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="m-otzgx8d"/><path class="zhm4otbmz"/><path class="a1e57xbge"/><path class="uof3uv2_w"/><path class="uadcs425n"/><path class="uih_zvhtv"/></g>`,
		"fallback": "iconmind:snowfall-duotone-thin",
	});
}

export default Component;
