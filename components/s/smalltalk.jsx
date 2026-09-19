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
		"content": `<style>.l8k-qdz5f {
  d: path("M42.338 27.801V26a2 2 0 0 0-2-2H7.5a2 2 0 0 1-2-2v-1.801");
}

.re70tbjrp {
  width: 37px;
  height: 9.052px;
  x: 5.5px;
  y: 32.716px;
  rx: 2px;
  ry: 2px;
}

.rtgupqf9g {
  width: 37px;
  height: 9.052px;
  x: 5.5px;
  y: 6.232px;
  rx: 2px;
  ry: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="rtgupqf9g"/><path class="l8k-qdz5f"/><rect class="re70tbjrp"/></g>`,
		"fallback": "arcticons:smalltalk",
	});
}

export default Component;
