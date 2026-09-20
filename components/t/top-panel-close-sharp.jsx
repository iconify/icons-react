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
		"content": `<style>.nlfixfo7b {
  fill: currentColor;
  d: path("M8 16.5h8l-4-4zM5 19h14v-9H5zm-2 2V3h18v18z");
}
</style><path class="nlfixfo7b"/>`,
		"fallback": "material-symbols:top-panel-close-sharp",
	});
}

export default Component;
