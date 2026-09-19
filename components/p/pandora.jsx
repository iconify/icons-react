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
		"content": `<style>.xci0vdbxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.98 4.5H7.52v39h12v-8h5.46a15.5 15.5 0 1 0 0-31");
}
</style><path class="xci0vdbxh"/>`,
		"fallback": "arcticons:pandora",
	});
}

export default Component;
