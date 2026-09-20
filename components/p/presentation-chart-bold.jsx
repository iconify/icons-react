import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k5vv-pjcb {
  fill: currentColor;
  d: path("M216 36h-76V24a12 12 0 0 0-24 0v12H40a20 20 0 0 0-20 20v120a20 20 0 0 0 20 20h31l-16.4 20.5a12 12 0 0 0 18.74 15l28.4-35.5h52.46l28.4 35.5a12 12 0 0 0 18.74-15L185 196h31a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20m-4 136H44V60h168Zm-108-52v24a12 12 0 0 1-24 0v-24a12 12 0 0 1 24 0m24-28a12 12 0 0 1 12 12v40a12 12 0 0 1-24 0v-40a12 12 0 0 1 12-12m24 52V88a12 12 0 0 1 24 0v56a12 12 0 0 1-24 0");
}
</style><path class="k5vv-pjcb"/>`,
		"fallback": "ph:presentation-chart-bold",
	});
}

export default Component;
