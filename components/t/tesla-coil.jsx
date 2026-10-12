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
		"content": `<style>.dyp638f-f {
  width: 9.5px;
  height: 2.75px;
  x: 7.25px;
  y: 18.5px;
  rx: 1px;
}

.fb52gvgnj {
  d: path("m5 10l-1.75 2.5h2.5L4 15.25M19 10l1.75 2.5h-2.5L20 15.25");
}

.geo4orbdh {
  width: 12.5px;
  height: 4.5px;
  x: 5.75px;
  y: 3.25px;
  rx: 2.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t1wjljbgx {
  width: 5.5px;
  height: 10.75px;
  x: 9.25px;
  y: 7.75px;
  rx: 1px;
}

.uuibwnbqz {
  d: path("M9.25 11h5.5m-5.5 3.75h5.5");
}
</style><g class="hntgybcog"><rect class="geo4orbdh"/><rect class="t1wjljbgx"/><path class="uuibwnbqz"/><rect class="dyp638f-f"/><path class="fb52gvgnj"/></g>`,
		"fallback": "iconoven:tesla-coil",
	});
}

export default Component;
