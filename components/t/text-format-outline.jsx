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
		"content": `<style>.gqmzf6wsw {
  fill: currentColor;
  d: path("M5 19v-2h14v2zm1.9-4L11 4h2l4.1 11h-1.9l-.95-2.8H9.8l-1 2.8zm3.45-4.4h3.3l-1.6-4.55h-.1z");
}
</style><path class="gqmzf6wsw"/>`,
		"fallback": "material-symbols:text-format-outline",
	});
}

export default Component;
