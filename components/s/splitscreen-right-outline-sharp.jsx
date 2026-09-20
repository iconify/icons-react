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
		"content": `<style>.fc-n39buv {
  fill: currentColor;
  d: path("M13.385 20V4h6v16zm-8.77 0V4h6v16zm1-15v14h4V5z");
}
</style><path class="fc-n39buv"/>`,
		"fallback": "material-symbols-light:splitscreen-right-outline-sharp",
	});
}

export default Component;
