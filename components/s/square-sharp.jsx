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
		"content": `<style>.a5o82kbby {
  fill: currentColor;
  d: path("M4 20V4h16v16z");
}
</style><path class="a5o82kbby"/>`,
		"fallback": "material-symbols-light:square-sharp",
	});
}

export default Component;
