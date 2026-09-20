import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.w1iybfyae {
  fill: currentColor;
  d: path("M7.192 20v-1.538l.77-.77H3V4h18v13.692h-4.962l.77.77V20z");
}
</style><path class="w1iybfyae"/>`,
		"fallback": "material-symbols-light:monitor-sharp",
	});
}

export default Component;
