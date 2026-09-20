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
		"content": `<style>.o8oss5bty {
  fill: currentColor;
  d: path("M5.48 16q0-1.038.741-1.779l8-8q.74-.74 1.779-.74t1.779.74t.74 1.779t-.74 1.779l-8 8q-.74.74-1.779.74t-1.779-.74T5.481 16");
}
</style><path class="o8oss5bty"/>`,
		"fallback": "material-symbols-light:pen-size-5",
	});
}

export default Component;
