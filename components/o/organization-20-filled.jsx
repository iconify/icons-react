import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.uu5_2-rlu {
  fill: currentColor;
  d: path("M7 5a3 3 0 1 1 3.5 2.96V9.5h3A1.5 1.5 0 0 1 15 11v1.041a3.001 3.001 0 1 1-1 0V11a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5v1.041a3.001 3.001 0 1 1-1 0V11a1.5 1.5 0 0 1 1.5-1.5h3V7.96A3 3 0 0 1 7 5");
}
</style><path class="uu5_2-rlu"/>`,
		"fallback": "fluent:organization-20-filled",
	});
}

export default Component;
