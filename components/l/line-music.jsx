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
		"content": `<style>.p0v8zgbsu {
  cx: 11.946px;
  cy: 38.553px;
  r: 4.947px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.rjt9k9bfk {
  cx: 36.023px;
  cy: 31.913px;
  r: 4.947px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ty_mt_5op {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.883 10.577a2.22 2.22 0 0 1 1.796-2.186l19.673-3.848a2.217 2.217 0 0 1 2.606 1.743m-24.075 9.55a2.22 2.22 0 0 1 1.796-2.186l19.673-3.848A2.217 2.217 0 0 1 41 11.977m0 0l-.031 19.936M16.883 15.836v22.717");
}
</style><path class="ty_mt_5op"/><circle class="p0v8zgbsu"/><circle class="rjt9k9bfk"/>`,
		"fallback": "arcticons:line-music",
	});
}

export default Component;
