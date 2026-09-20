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
		"content": `<style>.z2wdg881i {
  fill: currentColor;
  d: path("M3 21L21 3v18zm11.289-1H20V5.427l-5.712 5.712z");
}
</style><path class="z2wdg881i"/>`,
		"fallback": "material-symbols-light:signal-cellular-3-bar-outline",
	});
}

export default Component;
