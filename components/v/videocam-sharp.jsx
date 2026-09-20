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
		"content": `<style>.pvb6_fp2b {
  fill: currentColor;
  d: path("M2 20V4h16v6.5l4-4v11l-4-4V20z");
}
</style><path class="pvb6_fp2b"/>`,
		"fallback": "material-symbols:videocam-sharp",
	});
}

export default Component;
