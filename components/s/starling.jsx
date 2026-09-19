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
		"content": `<style>.fmpio0g-h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.25 24v-1.5a18 18 0 0 1 18-18h1.5m0 19.5v1.5a18 18 0 0 1-18 18h-1.5");
}
</style><path class="fmpio0g-h"/>`,
		"fallback": "arcticons:starling",
	});
}

export default Component;
