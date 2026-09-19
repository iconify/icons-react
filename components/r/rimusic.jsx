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
		"content": `<style>.v_jcb1-sa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.674 5.5v37m-22.887-8.962L33.02 25.32a1.525 1.525 0 0 0 0-2.642L8.613 8.588a1.525 1.525 0 0 0-2.287 1.32v28.184a1.525 1.525 0 0 0 2.287 1.32l6.3-3.637");
}
</style><path class="v_jcb1-sa"/>`,
		"fallback": "arcticons:rimusic",
	});
}

export default Component;
