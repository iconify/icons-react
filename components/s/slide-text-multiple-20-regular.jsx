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
		"content": `<style>.lgsa05bfp {
  fill: currentColor;
  d: path("M5.5 6a.5.5 0 1 0 0 1h4a.5.5 0 0 0 0-1zM5 9a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 9m.5 2a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zM16 5.5A2.5 2.5 0 0 0 13.5 3h-9A2.5 2.5 0 0 0 2 5.5v7A2.5 2.5 0 0 0 4.5 15h9a2.5 2.5 0 0 0 2.5-2.5zm-13 7v-7A1.5 1.5 0 0 1 4.5 4h9A1.5 1.5 0 0 1 15 5.5v7a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 3 12.5M6.5 17a2.5 2.5 0 0 1-2-1h9a3.5 3.5 0 0 0 3.5-3.5v-7c.607.456 1 1.182 1 2v5a4.5 4.5 0 0 1-4.5 4.5z");
}
</style><path class="lgsa05bfp"/>`,
		"fallback": "fluent:slide-text-multiple-20-regular",
	});
}

export default Component;
