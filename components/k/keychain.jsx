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
		"content": `<style>.g1y6hybax {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.541 9.713a3.746 3.746 0 0 1 3.746 3.745h0a3.746 3.746 0 1 1-3.746-3.745M13.795 24h20.41m-20.41 6.319h20.41m-20.41 6.319h20.41");
}

.xx4_ifb6u {
  width: 31px;
  height: 39px;
  x: 8.45px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}
</style><path class="g1y6hybax"/><rect class="xx4_ifb6u"/>`,
		"fallback": "arcticons:keychain",
	});
}

export default Component;
