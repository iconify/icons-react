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
		"content": `<style>.ga95htbrm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m30.2 4.5l5.55 5.55l-5.55 5.549l-5.55-5.55zm5.548 39H12.252V10.527h7.01v25.766h16.486z");
}
</style><path class="ga95htbrm"/>`,
		"fallback": "arcticons:luminor-latvia",
	});
}

export default Component;
