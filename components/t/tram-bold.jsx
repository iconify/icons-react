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
		"content": `<style>.odc9_rpat {
  fill: currentColor;
  d: path("M184 44h-44V28h28a12 12 0 0 0 0-24H88a12 12 0 0 0 0 24h28v16H72a36 36 0 0 0-36 36v104a36 36 0 0 0 36 36l-9.6 12.8a12 12 0 1 0 19.2 14.4L102 220h52l20.4 27.2a12 12 0 0 0 19.2-14.4L184 220a36 36 0 0 0 36-36V80a36 36 0 0 0-36-36M72 68h112a12 12 0 0 1 12 12v36H60V80a12 12 0 0 1 12-12m112 128H72a12 12 0 0 1-12-12v-44h136v44a12 12 0 0 1-12 12m-80-28a16 16 0 1 1-16-16a16 16 0 0 1 16 16m80 0a16 16 0 1 1-16-16a16 16 0 0 1 16 16");
}
</style><path class="odc9_rpat"/>`,
		"fallback": "ph:tram-bold",
	});
}

export default Component;
