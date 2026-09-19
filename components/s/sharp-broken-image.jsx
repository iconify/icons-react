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
		"content": `<style>.y9gkc3bal {
  fill: currentColor;
  d: path("M21 3v8.59l-3-3.01l-4 4.01l-4-4l-4 4l-3-3.01V3zm-3 8.42l3 3.01V21H3v-8.58l3 2.99l4-4l4 4z");
}
</style><path class="y9gkc3bal"/>`,
		"fallback": "ic:sharp-broken-image",
	});
}

export default Component;
