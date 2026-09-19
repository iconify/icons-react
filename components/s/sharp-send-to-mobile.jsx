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
		"content": `<style>.gqc50hzap {
  fill: currentColor;
  d: path("M17 18H7V6h10v1h2V1H5v22h14v-6h-2z");
}

.wokadwdga {
  fill: currentColor;
  d: path("m22 12l-4-4v3h-5v2h5v3z");
}
</style><path class="gqc50hzap"/><path class="wokadwdga"/>`,
		"fallback": "ic:sharp-send-to-mobile",
	});
}

export default Component;
