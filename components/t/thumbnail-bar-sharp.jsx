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
		"content": `<style>.goajxdqhb {
  fill: currentColor;
  d: path("M2 20V4h6v16zm8 0V4h12v16z");
}
</style><path class="goajxdqhb"/>`,
		"fallback": "material-symbols:thumbnail-bar-sharp",
	});
}

export default Component;
