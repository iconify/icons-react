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
		"content": `<style>.a_0xr7bkz {
  fill: currentColor;
  d: path("M3 4v16h18V4zm16 14H5V8h14z");
}
</style><path class="a_0xr7bkz"/>`,
		"fallback": "ic:sharp-web-asset",
	});
}

export default Component;
