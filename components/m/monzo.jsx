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
		"content": `<style>.l25409bgk {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M5.14 13.31L5 32l9.21 9.18v-18.9l9.86 9.86l9.37-9.38v18.72L43 31.93V13.21l-6.68-6.69l-12.25 12.24L11.9 6.6Z");
}
</style><path class="l25409bgk"/>`,
		"fallback": "arcticons:monzo",
	});
}

export default Component;
