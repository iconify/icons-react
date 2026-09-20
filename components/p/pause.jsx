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
		"content": `<style>.vkbu0cc0g {
  fill: currentColor;
  d: path("M14 18V6h3.5v12zm-7.5 0V6H10v12z");
}
</style><path class="vkbu0cc0g"/>`,
		"fallback": "material-symbols-light:pause",
	});
}

export default Component;
