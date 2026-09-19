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
		"content": `<style>.aige1qb_m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m28.52 32.67l-8.915 9.83l16.63-1.65m-23.001 1.09c-7.803.284-16.06-25.212 13.783-32.88");
}

.t__vkvfxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M39 10.947S53.018 27.61 21.146 41.78");
}

.v-fa9mb2w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.633 5.5l11.82 3.167l-8.317 8.317");
}
</style><path class="t__vkvfxw"/><path class="aige1qb_m"/><path class="v-fa9mb2w"/>`,
		"fallback": "arcticons:peoplesync",
	});
}

export default Component;
