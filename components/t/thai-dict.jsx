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
		"content": `<style>.j3s9ivbxi {
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

.smgt1gciv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.646 20v8m9.21-8h5.3m-2.65 8v-8m-4.172 5.317v.033a2.65 2.65 0 1 1-5.3 0v-2.7a2.65 2.65 0 1 1 5.3 0v.033M12.844 28v-8h1.8a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1-3.5 3.5z");
}

.sw00bb7lb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.505 37.504a7 7 0 0 1-.261.005H5.756q-.132 0-.261-.005m0-5.956a8 8 0 0 1 .26-.004h36.489q.132 0 .26.004m0-15.097a7 7 0 0 1-.26.005H5.756q-.132 0-.26-.005m-.001-5.955q.13-.005.26-.005h36.489q.132 0 .26.005");
}
</style><path class="sw00bb7lb"/><rect class="j3s9ivbxi"/><path class="smgt1gciv"/>`,
		"fallback": "arcticons:thai-dict",
	});
}

export default Component;
