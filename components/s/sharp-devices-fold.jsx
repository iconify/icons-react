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
		"content": `<style>.l9a713beh {
  fill: currentColor;
  d: path("M17 3V-.03l-7 3V21h12V3zm3 16h-5.33L17 18V5h3zM2 3h2v2H2zm0 16h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm0-4h2v2H2zm4-4h2v2H6zm0 16h2v2H6z");
}
</style><path class="l9a713beh"/>`,
		"fallback": "ic:sharp-devices-fold",
	});
}

export default Component;
