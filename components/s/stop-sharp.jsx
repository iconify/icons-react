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
		"content": `<style>.c24gsgbav {
  fill: currentColor;
  d: path("M7 17V7h10v10z");
}
</style><path class="c24gsgbav"/>`,
		"fallback": "material-symbols-light:stop-sharp",
	});
}

export default Component;
