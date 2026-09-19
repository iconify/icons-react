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
		"content": `<style>.uf-2kvb5q {
  fill: currentColor;
  d: path("M16.83 5L15 3H9L7.17 5H2v16h20V5zM6 17l3-4l2.25 3l3-4L18 17z");
}
</style><path class="uf-2kvb5q"/>`,
		"fallback": "ic:sharp-photo-camera-back",
	});
}

export default Component;
