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
		"content": `<style>.ogxgiopnw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M18.942 39.992a7.4 7.4 0 0 1-5.251-2.176l-7.016-7.015a7.426 7.426 0 0 1 10.503-10.502l1.764 1.764l11.88-11.88a7.427 7.427 0 0 1 10.503 10.503L24.193 37.817a7.4 7.4 0 0 1-5.251 2.175");
}
</style><path class="ogxgiopnw"/>`,
		"fallback": "arcticons:tawakkalna",
	});
}

export default Component;
