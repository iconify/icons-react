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
		"content": `<style>.ss-f7gbeu {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm9.414 7l2.293-2.293a.999.999 0 1 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.414l3 3a.999.999 0 1 0 1.414-1.414Z");
}
</style><path class="ss-f7gbeu"/>`,
		"fallback": "coolicons:square-chevron-left-fill",
	});
}

export default Component;
