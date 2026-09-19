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
		"content": `<style>.i_d3yfldm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 38.333l12.413-7.166V16.833L24 9.668V2.5l18.62 10.75v21.5L24 45.5m0-35.833l-12.413 7.167v14.333L24 38.333V45.5L5.38 34.75v-21.5L24 2.5");
}

.tsw3bp48f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.97 27v-6h2.006c1.134 0 2.053.903 2.053 2.015s-.919 2.015-2.053 2.015H21.97m2.006 0l2.006 1.968m2.233.002v-6h2.006c1.134 0 2.053.903 2.053 2.015s-.919 2.015-2.053 2.015h-2.006m2.006 0l2.006 1.968m-16.502-5.997L17.755 27l2.03-6");
}
</style><path class="i_d3yfldm"/><path class="tsw3bp48f"/>`,
		"fallback": "arcticons:vrr-bus-and-bahn",
	});
}

export default Component;
