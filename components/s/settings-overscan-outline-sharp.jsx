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
		"content": `<style>.n1b-vbc5b {
  fill: currentColor;
  d: path("M7 14v-4l-2 2zm5 3l2-2h-4zm-2-8h4l-2-2zm7 5l2-2l-2-2zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="n1b-vbc5b"/>`,
		"fallback": "material-symbols:settings-overscan-outline-sharp",
	});
}

export default Component;
