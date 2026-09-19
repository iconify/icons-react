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
		"content": `<style>.ctnnjtb-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.663 5.5H16.337L5.5 16.337v15.326L16.337 42.5h15.326L42.5 31.663V16.337z");
}

.quq-yjbgk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.294 24a5.25 5.25 0 0 0-5.25 5.25h0c0 2.9 2.35 5.25 5.25 5.25h3.412c2.9 0 5.25-2.35 5.25-5.25h0c0-2.9-2.35-5.25-5.25-5.25m0 0c2.9 0 5.25-2.35 5.25-5.25h0c0-2.9-2.35-5.25-5.25-5.25h-3.412a5.25 5.25 0 0 0-5.25 5.25h0c0 2.9 2.35 5.25 5.25 5.25m0 0h3.412");
}
</style><path class="quq-yjbgk"/><path class="ctnnjtb-h"/>`,
		"fallback": "arcticons:octa-dark-icon",
	});
}

export default Component;
