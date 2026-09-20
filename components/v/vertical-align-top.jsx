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
		"content": `<style>.pg87clb8s {
  fill: currentColor;
  d: path("M5 5V4h14v1zm6.5 15V9.608l-3.1 3.1L7.692 12L12 7.692L16.308 12l-.708.708l-3.1-3.1V20z");
}
</style><path class="pg87clb8s"/>`,
		"fallback": "material-symbols-light:vertical-align-top",
	});
}

export default Component;
