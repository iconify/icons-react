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
		"content": `<style>.fiwu9-ecm {
  width: 16.5px;
  height: 7px;
  x: 3.75px;
  y: 14.25px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7_92qspr {
  d: path("M4.75 14.25c0-4 3.5-6.5 7.25-8c3.75 1.5 7.25 4 7.25 8Z");
}

.ygy3ngm9w {
  d: path("M12 2.75v3.5m-1.75 15v-2.5a1.75 1.75 0 0 1 3.5 0v2.5m-7-4.25v1.5m10.5-1.5v1.5");
}
</style><g class="hntgybcog"><path class="w7_92qspr"/><rect class="fiwu9-ecm"/><path class="ygy3ngm9w"/></g>`,
		"fallback": "iconoven:mosque-dome",
	});
}

export default Component;
