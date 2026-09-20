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
		"content": `<style>.qesv06b8h {
  fill: currentColor;
  d: path("m12 15.375l-6-6l1.4-1.4L12 12.55l4.6-4.575l1.4 1.4z");
}
</style><path class="qesv06b8h"/>`,
		"fallback": "material-symbols:stat-minus-1-outline-sharp",
	});
}

export default Component;
