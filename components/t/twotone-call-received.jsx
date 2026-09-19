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
		"content": `<style>.q0ctq_pqu {
  fill: currentColor;
  d: path("M15 17H8.41L20 5.41L18.59 4L7 15.59V9H5v10h10z");
}
</style><path class="q0ctq_pqu"/>`,
		"fallback": "ic:twotone-call-received",
	});
}

export default Component;
