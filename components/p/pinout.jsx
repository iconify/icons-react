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
		"content": `<style>.aa4bwl42f {
  d: path("M41.304 11.24c-8.7 12.268-19.65 19.83-35.352 24.444m38.637-17.876c-10.321 16.446-21.942 20.09-33.976 23.016");
}

.f_v_dfbgn {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="f_v_dfbgn"/><path class="aa4bwl42f"/></g>`,
		"fallback": "arcticons:pinout",
	});
}

export default Component;
