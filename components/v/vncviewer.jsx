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
		"content": `<style>.lq73arbib {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.43 7.31L14 38.5a1.53 1.53 0 0 0 3.05 0l9.52-31.19m3.99 13.93v-7.41c0-2.85 3-5.6 6.31-5.6s6.43 3 6.43 5.6v7.41m.13 18.57H36c-2.85 0-5.6-3-5.6-6.31s3-6.43 5.6-6.43h7.41");
}
</style><path class="lq73arbib"/>`,
		"fallback": "arcticons:vncviewer",
	});
}

export default Component;
