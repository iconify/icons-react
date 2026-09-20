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
		"content": `<style>.uk-o-hblz {
  fill: currentColor;
  d: path("M4 18v-4.808h6.808V18zm9.192 0v-4.808H20V18zM4 10.808V6h16v4.808z");
}
</style><path class="uk-o-hblz"/>`,
		"fallback": "material-symbols-light:tile-medium",
	});
}

export default Component;
