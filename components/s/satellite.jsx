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
		"content": `<style>.m4elzebub {
  fill: none;
  stroke: currentColor;
  stroke-miterlimit: 10;
  d: path("M26.736 22.723a3.2 3.2 0 1 1-4.224-1.625a3.2 3.2 0 0 1 4.224 1.625Z");
}

.z-1r63ets {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m12.282 4.5l7.812 13m7.812 13l7.812 13");
}
</style><path class="m4elzebub"/><path class="z-1r63ets"/>`,
		"fallback": "arcticons:satellite",
	});
}

export default Component;
