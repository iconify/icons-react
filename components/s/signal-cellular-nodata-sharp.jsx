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
		"content": `<style>.xkfae4z4j {
  fill: currentColor;
  d: path("m16.9 21.5l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.075 2.1l2.075 2.1l-1.4 1.4l-2.1-2.075zM2 22L22 2v10.7q-.675-.4-1.45-.587T19 11.925q-2.525 0-4.3 1.775T12.925 18q0 1.15.375 2.138T14.425 22z");
}
</style><path class="xkfae4z4j"/>`,
		"fallback": "material-symbols:signal-cellular-nodata-sharp",
	});
}

export default Component;
