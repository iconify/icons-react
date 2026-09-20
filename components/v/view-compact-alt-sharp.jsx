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
		"content": `<style>.v0lcqyb-q {
  fill: currentColor;
  d: path("M7.5 16.5h4v-4h-4zm0-5h4v-4h-4zm5 5h4v-4h-4zm0-5h4v-4h-4zM2 20V4h20v16z");
}
</style><path class="v0lcqyb-q"/>`,
		"fallback": "material-symbols:view-compact-alt-sharp",
	});
}

export default Component;
