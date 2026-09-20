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
		"content": `<style>.cmfk4ybyx {
  fill: currentColor;
  d: path("M14 17H3V7h18v3h-2V9H5v6h9zm-9-2V9zm14 5v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="cmfk4ybyx"/>`,
		"fallback": "material-symbols:variable-add-outline",
	});
}

export default Component;
