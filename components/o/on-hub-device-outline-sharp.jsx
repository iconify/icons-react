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
		"content": `<style>.ptupyt4ab {
  fill: currentColor;
  d: path("M8.923 19.77v-1h6.154v1zm0-2.77L7.902 4h8.196l-1.021 13zm.927-1h4.3l.87-11H8.98zm0-11h-.87h6.04z");
}
</style><path class="ptupyt4ab"/>`,
		"fallback": "material-symbols-light:on-hub-device-outline-sharp",
	});
}

export default Component;
