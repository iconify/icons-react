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
		"content": `<style>.esq03vxnw {
  d: path("m18.283 27.911l-4.516-7.822H22.8zm8.873-7.947l-4.516 7.822h9.033z");
}

.w-948oscd {
  width: 5.606px;
  height: 3.441px;
  x: 5.5px;
  y: 22.279px;
  rx: 0.781px;
  ry: 0.781px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yhbuwqydw {
  d: path("M9.5 5.5a4 4 0 0 0-4 4v7.295h27.502c.771 0 1.396.625 1.396 1.396V29.81c0 .77-.625 1.396-1.396 1.396H5.5V38.5a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4z");
}
</style><g class="y9tr6bcfx"><rect class="w-948oscd"/><path class="esq03vxnw"/><path class="yhbuwqydw"/></g>`,
		"fallback": "arcticons:tickertape",
	});
}

export default Component;
