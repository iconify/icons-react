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
		"content": `<style>.msx9kxxqm {
  fill: currentColor;
  d: path("M22 2H2.01L2 22l4-4h16zM6 9h12v2H6zm8 5H6v-2h8zm4-6H6V6h12z");
}
</style><path class="msx9kxxqm"/>`,
		"fallback": "ic:sharp-chat",
	});
}

export default Component;
