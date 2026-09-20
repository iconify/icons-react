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
		"content": `<style>.liivd0vpq {
  fill: currentColor;
  d: path("M15 20V9H9.5V4H20v16zm-5.5 0V10H14v10zM4 20V10h4.5v10z");
}
</style><path class="liivd0vpq"/>`,
		"fallback": "material-symbols-light:responsive-layout",
	});
}

export default Component;
