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
		"content": `<style>.t7ups7bdp {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h6.272a6.5 6.5 0 0 1-.709-1.5H5.75c-.69 0-1.25-.56-1.25-1.25V5.75c0-.69.56-1.25 1.25-1.25h12.5c.69 0 1.25.56 1.25 1.25v5.563a6.5 6.5 0 0 1 1.5.709V5.75A2.75 2.75 0 0 0 18.25 3zM17.5 23a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m-3.309-3.252a4 4 0 0 1 5.557-5.557zm1.06 1.06l5.558-5.556a4 4 0 0 1-5.557 5.557");
}
</style><path class="t7ups7bdp"/>`,
		"fallback": "fluent:tab-prohibited-24-regular",
	});
}

export default Component;
