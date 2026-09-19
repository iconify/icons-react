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
		"content": `<style>.hzf_3_rgu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.52 38.82a18.47 18.47 0 0 1-23.16-1.71m0 2.96a2.92 2.92 0 1 1-5.84 0m35.6-1.71a2.92 2.92 0 1 1-4.92 3.16m-24.84-1.43v-3m23.16 1.73l1.68 2.7");
}

.qksh4hbpd {
  cx: 24px;
  cy: 23.56px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 12.05px;
  ry: 12.07px;
}

.qynm4ibmz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m41.12 38.36l-2.37-3.6h0a18.53 18.53 0 1 0-33.26-11.2v-.11v16.63");
}
</style><path class="hzf_3_rgu"/><ellipse class="qksh4hbpd"/><path class="qynm4ibmz"/>`,
		"fallback": "arcticons:ruthlesssettings",
	});
}

export default Component;
