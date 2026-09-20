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
		"content": `<style>.c9j5hbbqz {
  fill: currentColor;
  d: path("M3 23V1h18v22zm7-3h4v-1h-4zm-5-4h14V6H5z");
}
</style><path class="c9j5hbbqz"/>`,
		"fallback": "material-symbols:tablet-android-sharp",
	});
}

export default Component;
