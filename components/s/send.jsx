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
		"content": `<style>.l0773wboh {
  fill: currentColor;
  d: path("M3 20v-6l8-2l-8-2V4l19 8z");
}
</style><path class="l0773wboh"/>`,
		"fallback": "material-symbols:send",
	});
}

export default Component;
