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
		"content": `<style>.ibtz_jbig {
  fill: currentColor;
  d: path("M3 21V3h18v18zM7 9h2V7H7zm4 0h2V7h-2zm4 0h2V7h-2zm-8 4h2v-2H7zm4 0h2v-2h-2zm4 0h2v-2h-2z");
}
</style><path class="ibtz_jbig"/>`,
		"fallback": "material-symbols:margin-sharp",
	});
}

export default Component;
