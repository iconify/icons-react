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
		"content": `<style>.rae8slb2m {
  fill: currentColor;
  d: path("m21.949 3.316l-6 18a1 1 0 0 1-1.843.131l-3.38-6.759l3.981-3.981a.999.999 0 1 0-1.414-1.414l-3.981 3.981l-6.759-3.38a1 1 0 0 1 .131-1.843l18-6a1.001 1.001 0 0 1 1.265 1.265");
}
</style><path class="rae8slb2m"/>`,
		"fallback": "coolicons:paper-plane-fill-sharp",
	});
}

export default Component;
