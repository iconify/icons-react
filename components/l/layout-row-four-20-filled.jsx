import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.o6_8lub5t {
  fill: currentColor;
  d: path("M3 14a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm14-1v-2.5H3V13zm0-6v2.5H3V7zm0-1a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3z");
}
</style><path class="o6_8lub5t"/>`,
		"fallback": "fluent:layout-row-four-20-filled",
	});
}

export default Component;
