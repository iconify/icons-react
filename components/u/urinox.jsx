import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gbk7ohb3g {
  cx: 31.422px;
  cy: 6.747px;
  r: 2.247px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.nbzledfjb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.543 18.204a1.792 1.792 0 0 1 2.482-2.585l8.615 8.275a1.792 1.792 0 0 1-2.482 2.584L18.578 41.66a5.973 5.973 0 1 1-8.625-8.264l.01-.01Z");
}

.qes97rxyd {
  cx: 36.53px;
  cy: 14.297px;
  r: 3.178px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.x5h4tcbei {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.808 20.01l3.74 3.593m-7.736.567l3.74 3.592m-7.735.568l3.74 3.592m-7.736.568l3.74 3.592");
}
</style><path class="nbzledfjb"/><circle class="qes97rxyd"/><circle class="gbk7ohb3g"/><path class="x5h4tcbei"/>`,
		"fallback": "arcticons:urinox",
	});
}

export default Component;
