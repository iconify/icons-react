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
		"content": `<style>.dzck2fbik {
  fill: currentColor;
  d: path("M252 128a60.07 60.07 0 0 1-60 60H44a40 40 0 0 1 0-80h140a12 12 0 0 1 0 24H44a16 16 0 0 0 0 32h148a36 36 0 0 0 0-72H80a12 12 0 0 1 0-24h112a60.07 60.07 0 0 1 60 60");
}
</style><path class="dzck2fbik"/>`,
		"fallback": "ph:paperclip-horizontal-bold",
	});
}

export default Component;
