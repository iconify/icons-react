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
		"content": `<style>.leprq-4jz {
  fill: currentColor;
  d: path("M3 21v-8h18v8zm0-10V3h18v8z");
}
</style><path class="leprq-4jz"/>`,
		"fallback": "material-symbols:view-agenda-sharp",
	});
}

export default Component;
