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
		"content": `<style>.fpz65ob4g {
  fill: currentColor;
  d: path("M9.5 16.5h5v-9h-5v1h4v3h-2.384v1H13.5v3h-4zM4 20V4h16v16z");
}
</style><path class="fpz65ob4g"/>`,
		"fallback": "material-symbols-light:looks-3-sharp",
	});
}

export default Component;
