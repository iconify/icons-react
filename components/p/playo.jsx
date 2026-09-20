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
		"content": `<style>.c-fe_ob0p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.752 19.893v8.213h2.264m-9.627 0v-8.213h2.67c1.54 0 2.771 1.232 2.771 2.772s-1.232 2.772-2.772 2.772h-2.67m11.377 2.669l2.772-8.213l2.772 8.213m5.056-8.213L27.696 24l-2.67-4.107m2.67 8.213V24m11.915 0a4.175 4.175 0 0 1-8.35 0a4.175 4.175 0 0 1 8.35 0");
}

.j3s9ivbxi {
  width: 37px;
  height: 37px;
  x: 5.5px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.lx18-rbnc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.981 20.16c.516 2.545-1.062 4.389-2.414 5.055m5.354 2.659c-.516-2.546 1.062-4.39 2.415-5.056");
}
</style><path class="c-fe_ob0p"/><path class="lx18-rbnc"/><rect class="j3s9ivbxi"/>`,
		"fallback": "arcticons:playo",
	});
}

export default Component;
