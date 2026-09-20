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
		"content": `<style>.d_bqi0bwg {
  fill: currentColor;
  d: path("M4.615 20V4h6v16zm8.77 0V4h6v16zm5-15h-4v14h4z");
}
</style><path class="d_bqi0bwg"/>`,
		"fallback": "material-symbols-light:splitscreen-left-outline-sharp",
	});
}

export default Component;
