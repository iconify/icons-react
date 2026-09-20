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
		"content": `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.jvbq6bcdr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.306 21.575v5.3m-7.307-7v6a.945.945 0 0 0 1 1h.3m-2.3-5.3h2.1m17.9 3.3a2.006 2.006 0 0 1-2 2a2.006 2.006 0 0 1-2-2v-1.3a2.006 2.006 0 0 1 2-2a2.006 2.006 0 0 1 2 2m0 3.3v-5.3");
}

.jvh38tbcm {
  cx: 16.306px;
  cy: 19.175px;
  r: 0.75px;
  fill: currentColor;
}

.l81bv2ydu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.313 21.575l-2 5.3l-2-5.3m15.69 0v6a2.006 2.006 0 0 1-2 2a1.68 1.68 0 0 1-1.4-.6");
}

.ob-5rbc6b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M32.003 21.575za2.006 2.006 0 0 1 2 2v1.3a2.006 2.006 0 0 1-2 2a2.006 2.006 0 0 1-2-2v-1.3a2.006 2.006 0 0 1 2-2m5.998 5.3za2.006 2.006 0 0 1-2-2v-1.3a2.006 2.006 0 0 1 2-2a2.006 2.006 0 0 1 2 2v1.3a2.006 2.006 0 0 1-2 2m-25.705-3.299a2.006 2.006 0 0 1 2-2m-2 0v5.299");
}
</style><circle class="cpk0fnbgt"/><path class="l81bv2ydu"/><path class="ob-5rbc6b"/><circle class="jvh38tbcm"/><path class="jvbq6bcdr"/>`,
		"fallback": "arcticons:trivago",
	});
}

export default Component;
