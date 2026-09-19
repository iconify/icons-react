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
		"content": `<style>.kbxqgvfgp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M20.75 4.5L10.458 24L20.75 43.5L31.042 24l-5.417-10.292");
}

.zb27qk15m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.25 43.5L37.542 24L27.25 4.5L16.958 24l5.417 10.292");
}
</style><path class="kbxqgvfgp"/><path class="zb27qk15m"/>`,
		"fallback": "arcticons:my-renault",
	});
}

export default Component;
