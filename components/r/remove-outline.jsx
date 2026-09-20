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
		"content": `<style>.t9wvvrbjh {
  fill: currentColor;
  d: path("M5 13v-2h14v2z");
}
</style><path class="t9wvvrbjh"/>`,
		"fallback": "material-symbols:remove-outline",
	});
}

export default Component;
