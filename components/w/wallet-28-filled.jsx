import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.g1yuque2h {
  fill: currentColor;
  d: path("M3 5.75A2.75 2.75 0 0 1 5.75 3h13.5A2.75 2.75 0 0 1 22 5.75v1.258a3.75 3.75 0 0 1 3.5 3.742v10.5A3.75 3.75 0 0 1 21.75 25H6.754a3.75 3.75 0 0 1-3.75-3.75v-10.5H3V6h.011A3 3 0 0 1 3 5.75m17.5 0c0-.69-.56-1.25-1.25-1.25H5.75a1.25 1.25 0 1 0 0 2.5H20.5zM18.75 16a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5z");
}
</style><path class="g1yuque2h"/>`,
		"fallback": "fluent:wallet-28-filled",
	});
}

export default Component;
