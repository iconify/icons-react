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
		"content": `<style>.ar1tqx03v {
  fill: currentColor;
  d: path("M17 15h2V5H9v2h8zM7 17V1H5v4H1v2h4v12h12v4h2v-4h4v-2z");
}
</style><path class="ar1tqx03v"/>`,
		"fallback": "ic:sharp-crop",
	});
}

export default Component;
