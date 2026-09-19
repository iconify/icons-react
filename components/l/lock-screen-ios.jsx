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
		"content": `<style>.hig3d3bfs {
  cx: 20.334px;
  cy: 30.334px;
  r: 0.936px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.l7d8snbib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m23.817 26.463l-.006-2.838c.006-1.282-1.366-2.936-3.476-2.97c-2.111-.034-3.408 1.705-3.426 3.071l.018 2.721m3.407 2.078v.873");
}

.mcchuhbme {
  cx: 34.641px;
  cy: 13.52px;
  r: 8.02px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qfa1o5b3r {
  width: 9.357px;
  height: 6.683px;
  x: 15.59px;
  y: 26.447px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 1.337px;
  ry: 1.337px;
}

.ybi8et84f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.082 21.41v15.743a5.335 5.335 0 0 1-5.347 5.347h-20.05a5.335 5.335 0 0 1-5.346-5.347v-20.05a5.335 5.335 0 0 1 5.347-5.346h16.131");
}
</style><circle class="mcchuhbme"/><path class="ybi8et84f"/><rect class="qfa1o5b3r"/><path class="l7d8snbib"/><circle class="hig3d3bfs"/>`,
		"fallback": "arcticons:lock-screen-ios",
	});
}

export default Component;
