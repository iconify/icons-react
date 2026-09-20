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
		"content": `<style>.fmu4-itzh {
  fill: currentColor;
  d: path("M4 18v-5.5h16V18zm0-6.5V6h16v5.5z");
}
</style><path class="fmu4-itzh"/>`,
		"fallback": "material-symbols-light:view-stream",
	});
}

export default Component;
