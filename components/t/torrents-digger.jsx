import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.bfn2xyb2c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m7.16 31.74l3.468-15.48m-5.128 0h10.257m14.366 15.48l3.468-15.48h3.484c3.74 0 6.094 3.032 5.256 6.772l-.434 1.935c-.838 3.741-4.55 6.773-8.29 6.773zm-12.692-7.742h7.741");
}
</style><path class="bfn2xyb2c"/>`,
		"fallback": "arcticons:torrents-digger",
	});
}

export default Component;
