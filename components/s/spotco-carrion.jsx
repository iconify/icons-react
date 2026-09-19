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
		"content": `<style>.bm-5nsbnf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.287 24.704c5.186 0 9.398 4.212 9.398 9.398S36.473 43.5 31.287 43.5c-5.197 0-9.398-4.212-9.398-9.398s4.2-9.398 9.398-9.398");
}

.ht_y3sbji {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.448 39.375q-.932.367-2.036.834C12.491 36.45 7.315 33.636 7.315 21.412V11.083L21.412 4.5l14.098 6.583v10.33q0 2.512-.25 4.135m-3.973 14.054v-11m-5.5 5.5h11");
}
</style><path class="bm-5nsbnf"/><path class="ht_y3sbji"/>`,
		"fallback": "arcticons:spotco-carrion",
	});
}

export default Component;
