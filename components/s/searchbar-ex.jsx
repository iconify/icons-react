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
		"content": `<style>.bvtve3j2j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.61 27.61l1.507 1.507m0 0v3.771l9.612 9.612l3.771-3.771l-9.612-9.612z");
}

.vq55xdbnp {
  cx: 18.451px;
  cy: 18.451px;
  r: 12.951px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vq55xdbnp"/><path class="bvtve3j2j"/>`,
		"fallback": "arcticons:searchbar-ex",
	});
}

export default Component;
