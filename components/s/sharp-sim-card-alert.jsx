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
		"content": `<style>.piufsb68s {
  fill: currentColor;
  d: path("M20 2H10L4 8v14h16zm-7 15h-2v-2h2zm0-4h-2V8h2z");
}
</style><path class="piufsb68s"/>`,
		"fallback": "ic:sharp-sim-card-alert",
	});
}

export default Component;
