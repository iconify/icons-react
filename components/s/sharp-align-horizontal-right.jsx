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
		"content": `<style>.a93huobqi {
  fill: currentColor;
  d: path("M20 2h2v20h-2zM2 10h16V7H2zm6 7h10v-3H8z");
}
</style><path class="a93huobqi"/>`,
		"fallback": "ic:sharp-align-horizontal-right",
	});
}

export default Component;
