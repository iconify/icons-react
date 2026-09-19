import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.raq6xbcds {
  fill: currentColor;
  d: path("M32 2C15.432 2 2 15.432 2 32s13.432 30 30 30s30-13.432 30-30S48.568 2 32 2m4 30c0 1.477-.81 2.752-2 3.445V38h-3.229l-6.187 10L21 46.068l7.514-12.146A3.94 3.94 0 0 1 28 32c0-1.477.81-2.752 2-3.445V6h4v20.315l3 1.614l-1.427 2.306A3.96 3.96 0 0 1 36 32");
}

.rt_37l3dj {
  cx: 32px;
  cy: 32px;
  r: 3px;
  fill: currentColor;
}
</style><path class="raq6xbcds"/><circle class="rt_37l3dj"/>`,
		"fallback": "emojione-monotone:seven-oclock",
	});
}

export default Component;
