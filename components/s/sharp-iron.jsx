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
		"content": `<style>.s7evb1cib {
  fill: currentColor;
  d: path("M18 6v8h-1V7H7v3h2V9h6v2H6c-2.21 0-4 1.79-4 4v3h15v-2h3V8h2V6z");
}
</style><path class="s7evb1cib"/>`,
		"fallback": "ic:sharp-iron",
	});
}

export default Component;
