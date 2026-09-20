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
		"content": `<style>.r_fn6mq7v {
  fill: currentColor;
  d: path("M3 21v-6h8v6zm10 0v-6h8v6zM3 13V3h18v10z");
}
</style><path class="r_fn6mq7v"/>`,
		"fallback": "material-symbols:tile-large",
	});
}

export default Component;
