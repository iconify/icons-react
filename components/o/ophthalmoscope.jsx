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

.ipjq0sb4a {
  width: 9.5px;
  height: 8.5px;
  x: 7.25px;
  y: 2.75px;
  rx: 2.5px;
}

.j-k_2xbwh {
  d: path("M19.75 4.75v4.5m-10.25 2v8a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-8Zm0 3.75h5m-5 3h5");
}

.lxdf-tbmp {
  cx: 12px;
  cy: 7px;
  r: 2px;
}
</style><g class="hntgybcog"><rect class="ipjq0sb4a"/><circle class="lxdf-tbmp"/><path class="j-k_2xbwh"/></g>`,
		"fallback": "iconoven:ophthalmoscope",
	});
}

export default Component;
