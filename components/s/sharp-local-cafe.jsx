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
		"content": `<style>.eqwq7v4mk {
  fill: currentColor;
  d: path("M20 3H4v14h14v-7h2c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 5h-2V5h2zM2 21h18v-2H2z");
}
</style><path class="eqwq7v4mk"/>`,
		"fallback": "ic:sharp-local-cafe",
	});
}

export default Component;
