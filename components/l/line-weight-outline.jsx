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
		"content": `<style>.d3dq-sznu {
  fill: currentColor;
  d: path("M3 20v-1h18v1zm0-3v-2h18v2zm0-4v-3h18v3zm0-5V4h18v4z");
}
</style><path class="d3dq-sznu"/>`,
		"fallback": "material-symbols:line-weight-outline",
	});
}

export default Component;
