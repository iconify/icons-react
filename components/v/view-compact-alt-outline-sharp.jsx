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
		"content": `<style>.jkaimrbhi {
  fill: currentColor;
  d: path("M7.5 16.5h4v-4h-4zm0-5h4v-4h-4zm5 5h4v-4h-4zm0-5h4v-4h-4zM2 20V4h20v16zm2-2h16V6H4zm0 0V6z");
}
</style><path class="jkaimrbhi"/>`,
		"fallback": "material-symbols:view-compact-alt-outline-sharp",
	});
}

export default Component;
