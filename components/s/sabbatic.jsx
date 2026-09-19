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
		"content": `<style>.ny-61-9of {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.433 23.05l9.188-9.394l9.366 9.557m3.217 10.813l-2.221-8.648M31.7 34.345l-2.008-7.865m4.292 7.865l-2.147-8.416m6.035 5.688l-1.744-6.79m3.256 3.773l-1.11-4.324M22.59 25.337l4.357-4.262m-9.28 2.89l6.18-6.054m-3.695 6.75l5.245-5.168m.502 5.71l2.598-2.545");
}

.v0l5_4bhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 20.266l6.953 14.078h25.094L43.5 20.266l-19.499 5.467z");
}
</style><path class="v0l5_4bhw"/><path class="ny-61-9of"/>`,
		"fallback": "arcticons:sabbatic",
	});
}

export default Component;
