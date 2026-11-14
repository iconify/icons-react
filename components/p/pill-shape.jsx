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
		"content": `<style>.qgv_t39ay {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7.5 6.25h9q2.382 0 4.066 1.684T22.25 12t-1.684 4.066T16.5 17.75h-9q-2.382 0-4.066-1.684T1.75 12t1.684-4.066T7.5 6.25");
}
</style><path class="qgv_t39ay"/>`,
		"fallback": "uix-solid:pill-shape",
	});
}

export default Component;
