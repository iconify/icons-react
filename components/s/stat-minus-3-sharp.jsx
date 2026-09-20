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
		"content": `<style>.t7aj_op-h {
  fill: currentColor;
  d: path("m12 21.925l-6-6l1.4-1.4L12 19.1l4.6-4.575l1.4 1.4zm0-5.95l-6-6l1.4-1.4L12 13.15l4.6-4.575l1.4 1.4zm0-5.95l-6-6l1.4-1.4L12 7.2l4.6-4.575l1.4 1.4z");
}
</style><path class="t7aj_op-h"/>`,
		"fallback": "material-symbols:stat-minus-3-sharp",
	});
}

export default Component;
