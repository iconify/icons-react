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
		"content": `<style>.tn7c8ibon {
  fill: currentColor;
  d: path("M6 21v-2l1-1H2V3h20v15h-5l1 1v2zm-2-5h16V5H4zm0 0V5z");
}
</style><path class="tn7c8ibon"/>`,
		"fallback": "material-symbols:monitor-outline-sharp",
	});
}

export default Component;
