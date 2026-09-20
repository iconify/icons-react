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
		"content": `<style>.lm2gido9d {
  fill: currentColor;
  d: path("M7 17V7h10v10zm2-2h6V9H9zm-6 2v-2h2v2zm0-8V7h2v2zm4 12v-2h2v2zM7 5V3h2v2zm8 16v-2h2v2zm0-16V3h2v2zm4 12v-2h2v2zm0-8V7h2v2zm-7 3");
}
</style><path class="lm2gido9d"/>`,
		"fallback": "material-symbols:switch-access-outline-sharp",
	});
}

export default Component;
