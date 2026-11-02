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
		"content": `<style>.pheg_6bdh {
  fill: currentColor;
  d: path("M6 3h12a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3m0 9h4a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3m15 3v3a3 3 0 1 1-6 0v-3a3 3 0 1 1 6 0");
}
</style><path class="pheg_6bdh"/>`,
		"fallback": "coolicons:layout-template-fill-round",
	});
}

export default Component;
